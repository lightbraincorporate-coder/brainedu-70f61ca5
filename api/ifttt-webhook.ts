import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const IFTTT_SECRET = process.env.IFTTT_SECRET || "";

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const payload = req.body || {};
    if (!payload.secret || payload.secret !== IFTTT_SECRET) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { orderId, phone, txRef } = payload;
    if (!orderId) return res.status(400).json({ error: "Missing orderId" });

    const update = await supabaseAdmin
      .from("orders")
      .update({ status: "paid", paid_at: new Date().toISOString(), tx_ref: txRef || null })
      .eq("id", orderId);

    if (update.error) {
      console.error("Supabase update error:", update.error);
      return res.status(500).json({ error: "DB update failed" });
    }

    const order = await supabaseAdmin.from("orders").select("product_id, user_email").eq("id", orderId).single();
    if (order.error) {
      console.error("Supabase select order error:", order.error);
      return res.status(500).json({ error: "DB read failed" });
    }

    const product_id = order.data.product_id;

    const fileRow = await supabaseAdmin.from("files").select("drive_link").eq("product_id", product_id).single();
    if (fileRow.error) {
      console.error("No file mapping:", fileRow.error);
      return res.status(500).json({ error: "File mapping not found" });
    }

    return res.status(200).json({ message: "payment validated", download_link: fileRow.data.drive_link });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}