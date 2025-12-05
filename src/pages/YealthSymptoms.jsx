import { useState } from "react";
import { marked } from "marked";


const productLinks = {
  "tylenol": [
    { pharmacy: "CVS", url: "https://www.cvs.com/shop/tylenol-extra-strength-acetaminophen-500-mg-caplets-prodid-1080178" },
    { pharmacy: "Walgreens", url: "https://www.walgreens.com/store/c/tylenol-500-mg-acetaminophen-caplets-for-pain-relief,-value-size/ID=300396915-product" },
  ],
  "advil": [
    { pharmacy: "CVS", url: "https://www.cvs.com/shop/advil-ibuprofen-pain-reliever-fever-reducer-200-ct-prodid-828868" },
    { pharmacy: "Walgreens", url: "https://www.walgreens.com/store/c/advil-ibuprofen-pain-reliever-&-fever-reducer-tablets/ID=300396272-product?skuId=sku305368" },
  ],
  "electrolyte": [
    { pharmacy: "CVS", url: "https://www.cvs.com/shop/cvs-adult-electrolyte-solution-with-zinc-33-8-oz-prodid-72006218" },
    { pharmacy: "Walgreens", url: "https://www.walgreens.com/store/c/liquid-i.v.-electrolyte-drink-mix-strawberry,-6ct/ID=300411121-product" },
  ]
};

const nearbyPharmacies = [
  { name: "CVS Pharmacy", address: "123 Church St", open: "24h", maps: "https://maps.app.goo.gl/dk2sVdRnPnNoG9db6" },
  { name: "Walgreens", address: "88 York St", open: "8am-8pm", maps: "https://maps.app.goo.gl/ftXpp9QSQ3vkS4tL8" },
  { name: "Yale Health Pharmacy", address: "55 Lock St", open: "Mon-Fri 8-6, Sat 8-3", maps: "https://maps.app.goo.gl/drSi6j8cPcNUpzsX9" }
];

function YealthSymptoms() {
  const [symptoms, setSymptoms] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState({});

  const getAdvice = async () => {
    setLoading(true);
    setAdvice("");

    try {
      const res = await fetch("/api/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          symptoms: symptoms.split(",").map(s => s.trim())
        }),
      });

      const data = await res.json();
      setAdvice(data.advice);
    } catch (err) {
      setAdvice("Error fetching advice");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const detectedProducts = Object.entries(productLinks)
    .filter(([key]) => advice.toLowerCase().includes(key));

  const toggleProduct = (name) => {
    setExpandedProducts(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div style={{
         backgroundColor: "#F0F4F8",
         minHeight: "100vh",
         padding: "1rem",
         fontFamily: "Inter, sans-serif",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
       }}>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.4rem", fontWeight: "700", color: "#1B4965" }}>
          Symptom + Pharmacy Checker
        </h1>
        <p style={{
          color: "#1B4965",
          marginTop: "0.5rem",
          fontSize: "1.05rem",
          maxWidth: "650px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Get personalized, AI-powered guidance for your symptoms, discover recommended medications,
          and quickly find nearby pharmacies.
        </p>
      </div>
      {/* ------------------------------------------------ */}

      <div style={{
  width: "100%",
  maxWidth: "650px",
  backgroundColor: "#fff",
  padding: "1.5rem",
  borderRadius: "16px",
  boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
  margin: "0 auto",
  boxSizing: "border-box",
}}>

        <textarea
          placeholder="Describe your symptoms..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          style={{
            width: "95%",
            height: "120px",
            padding: "12px",
            borderRadius: "8px",
            border: "2px solid #5FA8D3",
            marginBottom: "1rem"
          }}
        ></textarea>

        <button
          onClick={getAdvice}
          disabled={loading || !symptoms}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#1B4965",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? "Analyzing..." : "Get Advice"}
        </button>

        {advice && (
          <div style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#BEE9E8",
            borderRadius: "8px"
          }}>
            <h3 style={{ color: "#1B4965" }}>Suggestions</h3>
            <div
              style={{ whiteSpace: "pre-wrap", marginTop: 20 }}
              dangerouslySetInnerHTML={{ __html: marked(advice) }}
            ></div>

            {detectedProducts.length > 0 && (
              <div style={{ marginTop: "1rem" }}>
                <h4 style={{ color: "#1B4965" }}>Recommended Products</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {detectedProducts.map(([name, urls]) => (
                    <div key={name} style={{ border: "1px solid #5FA8D3", borderRadius: "8px" }}>
                      <button
                        onClick={() => toggleProduct(name)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "8px 12px",
                          backgroundColor: "#5FA8D3",
                          color: "white",
                          border: "none",
                          borderRadius: "8px 8px 0 0",
                          fontWeight: "bold",
                          cursor: "pointer"
                        }}
                      >
                        {name}
                      </button>

                      {expandedProducts[name] && (
                        <div style={{ backgroundColor: "#F0F4F8", borderRadius: "0 0 8px 8px", padding: "8px 12px" }}>
                          {urls.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "block",
                                marginBottom: "4px",
                                color: "#1B4965",
                                textDecoration: "underline"
                              }}
                            >
                              {link.pharmacy}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ color: "#1B4965" }}>Nearby Pharmacies</h3>
          {nearbyPharmacies.map((p, i) => (
            <div key={i} style={{
              backgroundColor: "#F0F4F8",
              padding: "1rem",
              borderRadius: "8px",
              marginTop: "0.5rem"
            }}>
              <strong>{p.name}</strong><br />
              {p.address}<br />
              <span style={{ color: "#1B4965" }}>Hours: {p.open}</span><br />
              <a
                href={p.maps}
                target="_blank"
                rel="noreferrer"
                className="underline text-sm"
              >
                View on Maps
              </a>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default YealthSymptoms;