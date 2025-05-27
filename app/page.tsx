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
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium shadow-lg text-sm sm:text-base">
            Başlayın
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <Image
              src="/test.png?height=600&width=400"
              alt="GökTürk App Screenshot"
              width={400}
              height={600}
              className="relative mx-auto rounded-3xl shadow-2xl border border-gray-700"
            />
          </div>
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
              <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg flex items-center gap-2 sm:gap-3 border border-gray-600 shadow-xl">
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                Google Play'den İndirin
              </Button>
            </div>
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
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Anında Çeviri</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Modern Türkçe metinleri Göktürk alfabesine çevirin veya tam tersini yapın. Gelişmiş AI teknolojisi ile
                  doğru ve hızlı çeviri deneyimi yaşayın.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/test.png?height=400&width=500"
              alt="Çeviri Özelliği"
              width={500}
              height={400}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/test.png?height=600&width=400"
              alt="Öğrenme Modülleri"
              width={500}
              height={400}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
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
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">İnteraktif Öğrenme</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Adım adım öğrenme modülleri ile Göktürk alfabesini kolayca öğrenin. Oyunlaştırılmış dersler ve pratik
                  egzersizlerle bilginizi pekiştirin.
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
                    <History className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Tarihî Keşif</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Antik Göktürk yazıtlarını ve tarihî metinleri keşfedin. Orkhon yazıtları ve diğer önemli eserleri
                  modern çevirilerle birlikte inceleyin.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/test.png?height=600&width=400"
              alt="Tarihî Metinler"
              width={500}
              height={400}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Feature 4 */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/test.png?height=600&width=400"
              alt="Pratik Egzersizler"
              width={500}
              height={400}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </div>
          <div className="relative group lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <Card className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Pratik Egzersizler</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Çeşitli egzersizler ve mini oyunlarla öğrendiklerinizi pekiştirin. Harf tanıma, kelime oluşturma ve
                  metin okuma alıştırmaları ile ustalaşın.
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
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">İlerleme Takibi</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-red-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Öğrenme sürecinizi detaylı istatistiklerle takip edin. Başarılarınızı görün, zayıf noktalarınızı
                  belirleyin ve motivasyonunuzu yüksek tutun.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-red-500/20 rounded-2xl blur-2xl"></div>
            <Image
              src="/test.png?height=600&width=400"
              alt="İlerleme Takibi"
              width={500}
              height={400}
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
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
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg flex items-center gap-2 sm:gap-3 mx-auto shadow-2xl">
            <Play className="w-5 h-5 sm:w-6 sm:h-6" />
            Şimdi İndirin
          </Button>
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
