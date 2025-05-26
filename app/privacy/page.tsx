import { Card, CardContent } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gizlilik Politikası - GökTürk",
  description: "GökTürk: Öğren ve Çevir uygulamasının gizlilik politikası",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white px-4 py-12 sm:px-8 md:px-24">
      <Card className="bg-gray-800 text-white border border-gray-600 shadow-xl max-w-3xl mx-auto">
        <CardContent className="p-6 sm:p-10 space-y-6">
          <h1 className="text-3xl font-bold text-center mb-4">Gizlilik Politikası</h1>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Genel Bilgi</h2>
            <p>
              <strong>GökTürk: Öğren ve Çevir</strong> uygulamasını kullandığınız için teşekkür ederiz. Bu gizlilik politikası, uygulamanın kullanıcı verilerini nasıl işlediğini açıklar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Toplanan Veriler</h2>
            <p>
              Uygulama, kullanıcıdan herhangi bir kişisel veri <strong>toplamaz</strong>. Yalnızca uygulama içi deneyimi geliştirmek için üçüncü taraf hizmet sağlayıcıları kullanılabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Üçüncü Taraf Hizmetler</h2>
            <p>
              Uygulama, reklam göstermek amacıyla <strong>Google AdMob</strong> hizmetini kullanmaktadır. AdMob, reklam performansını ölçmek ve içeriği iyileştirmek amacıyla bazı anonim bilgileri toplayabilir.
            </p>
            <p className="mt-2">
              Daha fazla bilgi için Google’ın gizlilik politikasına göz atabilirsiniz:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Çocukların Gizliliği</h2>
            <p>
              Uygulama, 13 yaşın altındaki çocuklara yönelik olabilir ancak hiçbir kişisel bilgi toplanmaz. AdMob üzerinden çocuklara uygun reklam politikaları uygulanmaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Verilerin Saklanması</h2>
            <p>
              Uygulama tarafından kullanıcıya ait hiçbir veri saklanmaz, paylaşılmaz veya analiz edilmez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Değişiklikler</h2>
            <p>
              Gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu sayfa üzerinden bildirilecektir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. İletişim</h2>
            <p>
              Gizlilik politikasıyla ilgili sorularınız için bize ulaşabilirsiniz:{" "}
              <a
                href="mailto:developermau@hotmail.com"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                developermau@hotmail.com
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
