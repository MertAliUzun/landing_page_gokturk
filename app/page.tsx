import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, BookOpen, History, Target, TrendingUp, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 ">
      <div className="px-4 sm:px-8 md:px-16 lg:px-40">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
          src="/logo.png" // public klasöründe logo.png varsa
          alt="Ana Sayfa"
          width={50}
          height={50}
        />
        <a
              href="https://play.google.com/store/apps/details?id=com.mau.gokturk"
              target="_blank"
              rel="noopener noreferrer"
            >
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium shadow-lg text-sm sm:text-base">
            Başlayın
          </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              GökTürk:
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                Öğren ve Çevir
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Antik Göktürk alfabesini modern teknoloji ile öğrenin. Çeviri yapın, tarihî metinleri keşfedin ve Türk
              kültürünün kökenlerine yolculuk yapın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.mau.gokturk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg flex items-center gap-2 sm:gap-3 border border-gray-600 shadow-xl">
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                Google Play'den İndirin
              </Button>
            </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <Image
              src="/gokturk_1.png?height=600&width=400"
              alt="GökTürk App Screenshot"
              width={300}
              height={400}
              className="relative mx-auto rounded-3xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Feature 0 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/gokturk_1.png?height=600&width=400"
              alt="Göktürkçe Çeviri"
              width={300}
              height={250}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
          </div>
          <div className="relative group lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Card className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Türkçe - Göktürkçe Çeviri</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  • Türkçe'den Göktürkçeye çeviri yapıp yazdığınız metnin Göktürkçesini kopyalabilirsiniz.<br/>
                  • Göktürkçe'den Türkçe'ye çeviri de AI entegrasyonu sayesinde desteklemektedir.<br/>
                  • Alfabenin yapısından ötürü Göktürkçe'den Türkçeye çevrilirken birebir çeviri yapılamaz.<br/>
                  • Ancak AI sayesinde %99 doğruluk oranıyla çeviri yapılabilir.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Card className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Pratik ve Öğrenme</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  • Göktürkçe alfabeyi ve kuralları inceleyerek öğrenmeye başlayabilirsiniz.<br/>
                  • Daha sonra kendinizi test etmek için Türkçe-Göktürkçe ve Göktürkçe-Türkçe testlerini çözebilirsiniz.<br/>
                  • Bu testlerde harf ve kelimeler sorularak bilginiz sınanır.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/gokturk_2.png?height=400&width=500"
              alt="Çeviri Özelliği"
              width={300}
              height={250}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/gokturk_3.png?height=600&width=400"
              alt="Öğrenme Modülleri"
              width={300}
              height={250}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
          </div>
          <div className="relative group lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Card className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Sözlük Ekranı</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  • Sözlük sayfasından 10000 den fazla kelimeyi arayabilirsiniz.<br/>
                  • Aramak için hem anlamlarını, hem kelimenin türkçesini hem de Göktürkçe harfler ile yazılan halini kullanarak arama yapabilirsiniz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Card className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Atasözleri Ekranı</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  • Göktürkçe atasözlerini bu sayfadan keşfedebilirsiniz.<br/>
                  • Bu sayfaya her geldiğinizde 1000'in üzerinde atasözünden rasgele seçerek görmediğiniz atasözleri görebilirsiniz.<br/>
                  • Ayrıca eğer bir atasözünü yanlışlıkla geçip tekrar bulmak isterseniz, uygulama aynı sayfada kaldığınız sürece bu veriyi hafızasında tutacağı için rahatlıkla bulabilirsiniz.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/gokturk_4.png?height=600&width=400"
              alt="Tarihî Metinler"
              width={300}
              height={250}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Feature 4 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/gokturk_5.png?height=600&width=400"
              alt="Pratik Egzersizler"
              width={300}
              height={250}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
          </div>
          <div className="relative group lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Card className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Orhun Yazıtları</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  • Bu sayfada Orhun yazıtlarını inceleyebilirsiniz.<br/>
                  • Tonyukuk, Bilge Kağan ve Kül Tigin yazıtlarını okuyabilirsiniz.<br/>
                  • Hem Göktürkçe, hem Göktürkçenin Latin alfabeyle yazımı hemde günümüz Türkçesi hallerini görebilirsiniz.<br/>
                  • Ayrıca kaldığınız yerden devam edebilmek için "kitap ayracı" bırakabilirsiniz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature 5 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Card className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-rose-500/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-red-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Sınav Ekranı</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-red-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  • Gördüğünüz gibi 4 şıklı bir sınav sistemi vardır.<br/>
                  • Burada Göktürkçe harfler veya kelimeler verilerek Türkçe karşılıkları sorulabilir.<br/>
                  • Ayrıca Türkçe harfler veya kelimeler verilerek Göktürkçe karşılıkları da sorulabilir.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
          <div className="relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-red-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/gokturk_6.png?height=600&width=400"
              alt="İlerleme Takibi"
              width={300}
              height={250}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
        </div>
      </section>

      </div> {/* End of px-40 */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 py-8 sm:py-12 md:py-16 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Göktürk Alfabesini Öğrenmeye Başlayın</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Türk kültürünün kökenlerine yolculuk yapın ve antik alfabeyi modern teknoloji ile öğrenin.
          </p>
          <a
              href="https://play.google.com/store/apps/details?id=com.mau.gokturk"
              target="_blank"
              rel="noopener noreferrer"
            >
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg flex items-center gap-2 sm:gap-3 mx-auto shadow-2xl">
            <Play className="w-5 h-5 sm:w-6 sm:h-6" />
            Şimdi İndirin
          </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-gray-100 text-center md:text-right">&copy; {new Date().getFullYear()} GökTürk. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
