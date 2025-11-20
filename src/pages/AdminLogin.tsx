import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLogin() {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const loginIdentifier = phoneOrEmail.includes("@")
        ? phoneOrEmail
        : `${phoneOrEmail}@phone.local`;

      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: loginIdentifier,
        password,
      });

      if (signInError) {
        setError(signInError.message || "Erreur lors de la connexion");
        console.error("signInError:", signInError);
      } else if (!data.user) {
        setError("Utilisateur introuvable ou mot de passe incorrect");
      } else {
        window.location.href = "/admin";
      }
    } catch (err: any) {
      console.error("Login request failed:", err);
      setError(
        "Impossible de contacter le service d'authentification. Vérifie la configuration des variables d'environnement (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) sur Vercel et ta connexion réseau."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", padding: 20 }}>
      <h1>Connexion administrateur</h1>
      {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
      <form onSubmit={onSubmit}>
        <label>
          Numéro ou email
          <input
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
            placeholder="+242066070176"
            required
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          />
        </label>
        <label>
          Mot de passe
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          />
        </label>
        <button disabled={loading} style={{ padding: "8px 12px" }}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}