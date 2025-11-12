'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()

  const downloadWhitepaper = () => {
    const pdfUrl = language === 'JP' ? '/wh_ja.pdf' : '/wh_en.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = language === 'JP' ? 'Whitepaper_JP.pdf' : 'Whitepaper_EN.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <footer className="bg-black border-t-2 border-green-400">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Japan Office */}
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-base md:text-lg mb-3 md:mb-4">Japan Office</h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              {t({
                JP: '東京都中央区日本橋室町1-2-6-7F',
                EN: 'Nihonbashi Daiei Bldg 7F, 1-2-6 Nihonbashi-Muromachi, Chuo-ku, Tokyo, Japan'
              })}
            </p>
          </div>

          {/* Malaysia Office */}
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-base md:text-lg mb-3 md:mb-4">Malaysia Office</h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              IB Tower, Level 33, 8, Lrg Binjai, Kuala Lumpur, 50450 Kuala Lumpur, Malaysia
            </p>
          </div>

          {/* Singapore Office */}
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-base md:text-lg mb-3 md:mb-4">Singapore Office</h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Level 39, Marina Bay Financial Centre, 10 Marina Blvd, Tower 2, Singapore
            </p>
          </div>

          {/* Hong Kong Office */}
          <div className="text-center md:text-left">
            <h3 className="text-green-400 font-semibold text-base md:text-lg mb-3 md:mb-4">Hong Kong Office</h3>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Tower I, Grand Century Place, 193 Prince Edward Road West, Hong Kong SAR
            </p>
          </div>
        </div>
      </div>

      {/* Legal Links & Copyright */}
      <div className="border-t border-emerald-500/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-4">
           
            <div className="text-white text-sm whitespace-pre-line">
              {t({
                JP: '© 2025 MOTHER VEGETABLE PROJECT.\nAll rights reserved.',
                EN: '© 2025 MOTHER VEGETABLE PROJECT.\nAll rights reserved.'
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}