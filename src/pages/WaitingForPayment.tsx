import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function WaitingForPayment({ orderId }: { orderId: string }) {
  const [status, setStatus] = useState<string>("pending");
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  useEffect(() => {
    let canceled = false;

    const checkStatus = async () => {
      try {
        const { data, error } = await supabase
          .from("orders")
          .select("status, product_id")
          .eq("id", orderId)
          .single();

        if (error) {
          console.error("orders select error:", error);
          return;
        }
        if (!canceled) {
          setStatus(data.status);
          if (data.status === "paid") {
            const fileRes = await supabase
              .from("files")
              .select("drive_link")
              .eq("product_id", data.product_id)
              .single();
            if (!fileRes.error) setDownloadLink(fileRes.data.drive_link);
          }
        }
      } catch (err) {
        console.error("checkStatus error:", err);
      }
    };

    checkStatus();
    const id = setInterval(checkStatus, 5000);
    return () => {
      canceled = true;
      clearInterval(id);
    };
  }, [orderId]);

  const onDownload = () => {
    if (!downloadLink) return;
    window.open(downloadLink, "_blank");
  };

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
      {status !== "paid" ? (
        <>
          <h3>En attente de validation du paiement...</h3>
          <p>Nous vérifions automatiquement. Restez sur cette page.</p>
        </>
      ) : (
        <>
          <h3 style={{ color: "green" }}>Votre paiement est validé</h3>
          <p>Cliquez sur le bouton ci‑dessous pour télécharger votre fichier.</p>
          <button onClick={onDownload} disabled={!downloadLink}>
            {downloadLink ? "Télécharger le fichier" : "Préparation du fichier..."}
          </button>
        </>
      )}
    </div>
  );
}