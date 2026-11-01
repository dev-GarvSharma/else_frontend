import { useEffect, useRef, useState } from 'react'

const products = [
  {
    id: '01',
    name: 'Affection',
    mood: 'Tender · Warm · Intimate',
    notes: 'Rose, amber, soft musk',
    price: 4999,
    color: '#d9d4f2',
    image: '/assets/else-affection-uniform.png',
  },
  {
    id: '02',
    name: 'Obsession',
    mood: 'Bold · Intense · Unforgettable',
    notes: 'Saffron, dark woods, amber',
    price: 5499,
    color: '#cad9a9',
    image: '/assets/else-obsession-uniform.png',
  },
  {
    id: '03',
    name: 'After Life',
    mood: 'Mysterious · Deep · Timeless',
    notes: 'Oud, smoked woods, spice',
    price: 5999,
    color: '#efc3b5',
    image: '/assets/else-after-life-uniform.png',
  },
  {
    id: '04',
    name: 'Still',
    mood: 'Calm · Pure · Eternal',
    notes: 'Jasmine, white tea, sandalwood',
    price: 4999,
    color: '#f1dc8b',
    image: '/assets/else-still-uniform.png',
  },
]
type Product = (typeof products)[number]

const bottleArtwork = [
  { name: 'Affection', image: '/assets/else-affection-uniform.png' },
  { name: 'Obsession', image: '/assets/else-obsession-uniform.png' },
  { name: 'After Life', image: '/assets/else-after-life-uniform.png' },
  { name: 'Still', image: '/assets/else-still-uniform.png' },
]

const productGalleries: Record<string, { image: string; label: string }[]> = {
  Affection: [
    { image: '/assets/else-affection-uniform.png', label: 'Studio 01' },
    { image: '/assets/else-affection-original.png', label: 'Studio 02' },
  ],
  Obsession: [
    { image: '/assets/else-obsession-uniform.png', label: 'Studio 01' },
    { image: '/assets/else-obsession-from-campaign.png', label: 'Studio 02' },
  ],
  'After Life': [
    { image: '/assets/else-after-life-uniform.png', label: 'Studio 01' },
    { image: '/assets/else-after-life-original.png', label: 'Studio 02' },
  ],
  Still: [
    { image: '/assets/else-still-uniform.png', label: 'Studio 01' },
    { image: '/assets/else-still-original.png', label: 'Studio 02' },
  ],
}

const families = [
  {
    name: 'Fresh',
    note: 'Citrus · Green · Airy',
    color: '#dbe8f0',
    image: 'https://images.unsplash.com/photo-1585345282543-ebc0d1cb3ee9?auto=format&fit=crop&w=900&q=90',
  },
  {
    name: 'Floral',
    note: 'Petals · Powder · Soft',
    color: '#ead7ec',
    image: 'https://images.unsplash.com/photo-1554486840-db3a33d9318e?auto=format&fit=crop&w=900&q=90',
  },
  {
    name: 'Woody',
    note: 'Cedar · Smoke · Earth',
    color: '#d8c5ad',
    image: 'https://images.unsplash.com/photo-1639690381680-4f2f4ba2a2ec?auto=format&fit=crop&w=900&q=90',
  },
  {
    name: 'Warm',
    note: 'Amber · Spice · Skin',
    color: '#f2cfaf',
    image: 'https://images.unsplash.com/photo-1785331546632-3cf4dcb827f8?auto=format&fit=crop&w=900&q=90',
  },
]

const reels = [
  {
    user: '@maya.wears',
    quote: 'Affection smells like clean skin after the best nap.',
    product: 'AFFECTION',
    video: 'https://assets.mixkit.co/videos/20766/20766-360.mp4',
    poster: 'https://assets.mixkit.co/videos/20766/20766-thumb-360-0.jpg',
  },
  {
    user: '@theo.jpg',
    quote: 'Three strangers asked what I was wearing.',
    product: 'LATE CHECKOUT',
    video: 'https://assets.mixkit.co/videos/21695/21695-360.mp4',
    poster: 'https://assets.mixkit.co/videos/21695/21695-thumb-360-0.jpg',
  },
  {
    user: '@riyaafterhours',
    quote: 'Obsession is green, cool, and quietly addictive.',
    product: 'FIG PLEASE',
    video: 'https://assets.mixkit.co/videos/24161/24161-360.mp4',
    poster: 'https://assets.mixkit.co/videos/24161/24161-thumb-360-3.jpg',
  },
  {
    user: '@alexincolour',
    quote: 'Still genuinely changes my whole mood.',
    product: 'SUN SHOWER',
    video: 'https://assets.mixkit.co/videos/21980/21980-360.mp4',
    poster: 'https://assets.mixkit.co/videos/21980/21980-thumb-360-2.jpg',
  },
  {
    user: '@jules.notes',
    quote: 'We both wear it. It smells completely different on each of us.',
    product: 'ELSE LAYERING',
    video: 'https://assets.mixkit.co/videos/23437/23437-360.mp4',
    poster: 'https://assets.mixkit.co/videos/23437/23437-thumb-360-3.jpg',
  },
  {
    user: '@noahafterfive',
    quote: 'The drydown is warm, soft, and impossible to stop smelling.',
    product: 'LATE CHECKOUT',
    video: 'https://assets.mixkit.co/videos/21694/21694-360.mp4',
    poster: 'https://assets.mixkit.co/videos/21694/21694-thumb-360-0.jpg',
  },
  {
    user: '@samira.scented',
    quote: 'Finally, a fresh scent that does not disappear in an hour.',
    product: 'SUN SHOWER',
    video: 'https://assets.mixkit.co/videos/25335/25335-360.mp4',
    poster: 'https://assets.mixkit.co/videos/25335/25335-thumb-360-0.jpg',
  },
  {
    user: '@leoandlight',
    quote: 'Obsession is the one bottle we keep stealing from each other.',
    product: 'FIG PLEASE',
    video: 'https://assets.mixkit.co/videos/25337/25337-360.mp4',
    poster: 'https://assets.mixkit.co/videos/25337/25337-thumb-360-0.jpg',
  },
  {
    user: '@miaonmonday',
    quote: 'The discovery set made choosing a favorite delightfully difficult.',
    product: 'DISCOVERY EDIT',
    video: 'https://assets.mixkit.co/videos/27467/27467-360.mp4',
    poster: 'https://assets.mixkit.co/videos/27467/27467-thumb-360-0.jpg',
  },
]

const writtenReviews = [
  { quote: 'Affection feels soft, warm, and beautifully close to the skin.', name: 'Amelia R.', city: 'Mumbai, India', scent: 'Affection' },
  { quote: 'Obsession is bold and lasts beautifully through a long day.', name: 'Daniel K.', city: 'Bengaluru, India', scent: 'Obsession' },
  { quote: 'After Life has a deep, woody warmth that gets better on skin.', name: 'Priya S.', city: 'Delhi, India', scent: 'After Life' },
  { quote: 'Still is bright, calm, and never too sweet. My new everyday scent.', name: 'Jordan M.', city: 'Pune, India', scent: 'Still' },
]

const faqs = [
  { question: 'Are ELSE fragrances really genderless?', answer: 'Yes. We formulate around notes, moods, and skin chemistry—not traditional gender categories. Every scent is made for anyone who connects with it.' },
  { question: 'How long does the fragrance last?', answer: 'Our eau de parfums contain 18% fragrance oils and typically wear for 8 hours or more. Longevity varies with skin, climate, and how you apply it.' },
  { question: 'Can I try the scents before buying a bottle?', answer: 'Our Discovery Edit includes 2ml sprays of all four fragrances. The ₹1,499 price is redeemable against your next full-size bottle.' },
  { question: 'How should I choose my first scent?', answer: 'Start with the feeling you want: Fresh, Floral, Woody, or Warm. For the most confident choice, wear each discovery vial for a full day and notice the drydown.' },
  { question: 'Can the fragrances be layered?', answer: 'Absolutely. The collection was designed to work alone or together. Try Affection with Obsession for creamy green musk, or Still with After Life for bright spice.' },
  { question: 'What is your shipping and return policy?', answer: 'We offer complimentary delivery across India on orders over ₹4,999. Unopened full-size products can be returned within 7 days. Discovery sets and opened fragrance are final sale.' },
]

const scentStories = [
  {
    name: 'Affection',
    number: '01',
    image: '/assets/else-affection-uniform.png',
    wash: 'linear-gradient(145deg,rgba(255,255,255,.94),rgba(190,171,225,.55))',
    notes: [
      { name: 'Bergamot', type: 'bright / first', color: '#f0dd78' },
      { name: 'Orris', type: 'soft / heart', color: '#d1c6eb' },
      { name: 'Rice milk', type: 'creamy / skin', color: '#f0d8ce' },
      { name: 'White musk', type: 'warm / lasting', color: '#d8e1c3' },
    ],
  },
  {
    name: 'Obsession',
    number: '02',
    image: '/assets/else-obsession-uniform.png',
    wash: 'linear-gradient(145deg,rgba(248,255,240,.95),rgba(154,189,135,.58))',
    notes: [
      { name: 'Fig leaf', type: 'green / first', color: '#c7d9a4' },
      { name: 'Black tea', type: 'cool / heart', color: '#bbc9b3' },
      { name: 'Coconut', type: 'smooth / skin', color: '#eee2c8' },
      { name: 'Cedar', type: 'dry / lasting', color: '#cbb99e' },
    ],
  },
  {
    name: 'After Life',
    number: '03',
    image: '/assets/else-after-life-uniform.png',
    wash: 'linear-gradient(145deg,rgba(255,244,239,.95),rgba(211,141,118,.58))',
    notes: [
      { name: 'Cardamom', type: 'spiced / first', color: '#e4b77e' },
      { name: 'Violet', type: 'soft / heart', color: '#cabce2' },
      { name: 'Suede', type: 'warm / skin', color: '#d6aa91' },
      { name: 'Tonka', type: 'sweet / lasting', color: '#c8aa83' },
    ],
  },
  {
    name: 'Still',
    number: '04',
    image: '/assets/else-still-uniform.png',
    wash: 'linear-gradient(145deg,rgba(255,253,228,.95),rgba(232,196,66,.58))',
    notes: [
      { name: 'Lemon', type: 'zesty / first', color: '#f1dd66' },
      { name: 'Neroli', type: 'bright / heart', color: '#f2c990' },
      { name: 'Jasmine', type: 'solar / skin', color: '#eee1bc' },
      { name: 'Blonde wood', type: 'clean / lasting', color: '#d6c5a3' },
    ],
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg className={diagonal ? 'diagonal' : ''} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

function Bag() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  )
}

function ProductDetails({
  product,
  products,
  bagCount,
  onAdd,
  notice,
  onBack,
  onChoose,
}: {
  product: Product
  products: Product[]
  bagCount: number
  notice: string
  onAdd: (item: string) => void
  onBack: () => void
  onChoose: (product: Product) => void
}) {
  const gallery = productGalleries[product.name] ?? [{ image: product.image, label: 'The bottle' }]
  const studioImage = gallery.find((view) => view.label === 'Studio 02')?.image ?? gallery[0].image
  const [activeImage, setActiveImage] = useState(studioImage)
  const [variant, setVariant] = useState('50 ml')
  useEffect(() => { window.scrollTo(0, 0) }, [product.name])
  const variants = [
    { size: '50 ml', price: product.price, original: product.price + 1500 },
    { size: '100 ml', price: product.price + 2500, original: product.price + 4000 },
  ]
  const selectedVariant = variants.find((item) => item.size === variant) ?? variants[0]
  const relatedProducts = products.filter((item) => item.name !== product.name).slice(0, 3)
  const review = writtenReviews.find((item) => item.scent === product.name)
  const notes = product.notes.split(', ')
  const scentNotes: Record<string, string[]> = {
    Affection: ['Rose petals', 'Jasmine', 'Amber & soft musk'],
    Obsession: ['Saffron & pepper', 'Dark rose', 'Oud & amber'],
    'After Life': ['Cardamom', 'Smoked woods', 'Oud & vetiver'],
    Still: ['Neroli', 'White tea', 'Sandalwood'],
  }[product.name] ?? notes

  const money = (amount: number) => `₹${amount.toLocaleString('en-IN')}`

  return (
    <main className="pdp-page">
      <header className="pdp-nav">
        <button type="button" onClick={onBack}>← <span>Back to collection</span></button>
        <button type="button" className="logo pdp-logo" onClick={onBack}>ELSE</button>
        <span className="pdp-bag"><Bag /> Bag <b>{bagCount}</b></span>
      </header>

      <div className="pdp-breadcrumb section-shell"><button type="button" onClick={onBack}>Shop all</button><span>/</span><span>{product.name}</span></div>

      <section className="pdp-product section-shell">
        <div className="pdp-gallery">
          <div className="pdp-main-image">
            <img className="pdp-product-image" src={activeImage} alt={`ELSE ${product.name} eau de parfum`} />
            <div className="pdp-thumbnails pdp-thumbnails-overlay" aria-label="Studio product views">
              {gallery.map((view) => (
                <button type="button" className={activeImage === view.image ? 'active' : ''} onClick={() => setActiveImage(view.image)} aria-label={`View ${view.label.toLowerCase()}`} key={view.image}>
                  <img src={view.image} alt="" />
                  <span>{view.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pdp-copy">
          <p className="kicker">ELSE · EAU DE PARFUM</p>
          <h1>{product.name}</h1>
          <p className="pdp-mood">{product.mood}</p>
          <div className="pdp-rating"><span>★★★★★</span><b>4.9</b><a href="#pdp-reviews">Read customer reviews</a></div>
          <p className="pdp-description">{product.name === 'Affection'
            ? 'A tender, luminous fragrance that settles close to the skin with a warm, lasting embrace.'
            : product.name === 'Obsession'
              ? 'An intense, magnetic blend made for lingering evenings and unforgettable entrances.'
              : product.name === 'After Life'
                ? 'Smoky woods and warm spice come together in a deep, quietly powerful scent.'
                : 'A clear, calming fragrance with a soft trail that feels effortless from morning to night.'}</p>

          <div className="pdp-price"><strong>{money(selectedVariant.price)}</strong><del>{money(selectedVariant.original)}</del><span>INCLUSIVE OF ALL TAXES</span></div>

          <div className="pdp-variants">
            <div><b>SIZE</b><span>{variant}</span></div>
            <div className="pdp-variant-options">
              {variants.map((item) => <button type="button" className={variant === item.size ? 'active' : ''} onClick={() => setVariant(item.size)} key={item.size}>{item.size}</button>)}
            </div>
          </div>

          <button type="button" className="pdp-add-button" onClick={() => onAdd(`${product.name} · ${variant}`)}>Add to bag <span>{money(selectedVariant.price)}</span><Bag /></button>
          <p className="pdp-delivery">Complimentary delivery across India on orders over ₹4,999</p>
          <div className="pdp-perks"><span>✳ Long-lasting EDP</span><span>✳ Made in India</span><span>✳ Genderless fragrance</span></div>

          <div className="pdp-notes">
            <h2>The notes</h2>
            <div><span><small>01 · OPENING</small><b>{scentNotes[0]}</b></span><span><small>02 · HEART</small><b>{scentNotes[1]}</b></span><span><small>03 · DRYDOWN</small><b>{scentNotes[2]}</b></span></div>
          </div>
        </div>
      </section>

      <section className="pdp-reviews section-shell" id="pdp-reviews">
        <div><p className="kicker">Worn and loved</p><h2>Words from<br /><i>real life.</i></h2></div>
        <article><span>★★★★★</span><blockquote>“{review?.quote ?? `${product.name} has become my new signature. Beautifully balanced and made to last.`}”</blockquote><p>{review?.name ?? 'ELSE customer'} · {review?.city ?? 'India'} <b>VERIFIED CUSTOMER</b></p></article>
      </section>

      <section className="pdp-related section-shell">
        <p className="kicker">Keep exploring</p><h2>Find your next <i>mood.</i></h2>
        <div className="product-grid">
          {relatedProducts.map((item) => (
            <article className="product" key={item.name}>
              <div className="product-visual">
                <button type="button" className="product-image-trigger" onClick={() => onChoose(item)} aria-label={`View ${item.name} details`}>
                  <img src={item.image} alt={`${item.name} eau de parfum`} />
                </button>
                <span className="product-id">{item.id} / 04</span>
                <span className="size">50 ML</span>
                <button type="button" onClick={() => onAdd(item.name)} aria-label={`Add ${item.name} to bag`}>
                  Add to bag <span>₹{item.price.toLocaleString('en-IN')}</span>
                </button>
              </div>
              <div className="product-heading">
                <h3><button type="button" className="product-title-button" onClick={() => onChoose(item)}>{item.name}</button></h3>
                <p>{item.mood}</p>
              </div>
              <p className="product-notes">{item.notes}</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="pdp-footer"><span>ELSE</span><small>FOUR FRAGRANCES. ENDLESS YOU.</small></footer>
      {notice && <div className="toast" role="status">{notice}</div>}
    </main>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bagCount, setBagCount] = useState(0)
  const [notice, setNotice] = useState('')
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [notesOpen, setNotesOpen] = useState(false)
  const [activeScent, setActiveScent] = useState(0)
  const [activeBanner, setActiveBanner] = useState(0)
  const [reviewsPaused, setReviewsPaused] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [openFaq, setOpenFaq] = useState(0)
  const reelTrackRef = useRef<HTMLDivElement>(null)
  const reviewTrackRef = useRef<HTMLDivElement>(null)
  const banners = ['/assets/else-endless-you.png', '/assets/else-four-moods.png']

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((slide) => (slide + 1) % banners.length), 6000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (reviewsPaused) return

    const timer = window.setInterval(() => {
      const track = reviewTrackRef.current
      const firstCard = track?.querySelector<HTMLElement>('.review-card')
      if (!track || !firstCard) return

      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0
      const step = firstCard.offsetWidth + gap
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step, behavior: 'smooth' })
    }, 4500)

    return () => window.clearInterval(timer)
  }, [reviewsPaused])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main > section')
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

    sections.forEach((section) => {
      section.classList.add('scroll-reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scentStory = scentStories[activeScent]

  const addItem = (item: string) => {
    setBagCount((count) => count + 1)
    setNotice(`${item} added to your bag`)
    window.setTimeout(() => setNotice(''), 1800)
  }

  if (selectedProduct) {
    return <ProductDetails key={selectedProduct.name} product={selectedProduct} products={products} bagCount={bagCount} notice={notice} onAdd={addItem} onBack={() => setSelectedProduct(null)} onChoose={setSelectedProduct} />
  }

  const scrollReviews = (direction: number) => {
    const track = reviewTrackRef.current
    if (track) track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' })
  }

  return (
    <main>
      <section className="marque-strip top-marquee" aria-label="ELSE, a modern Indian fragrance marque">
        <div className="marquee-window">
          <div className="marquee-track">
            <p>CRAFTED IN INDIA <i>✳</i> EAU DE PARFUM <i>✳</i> FOUR SIGNATURE SCENTS <i>✳</i> MADE TO BE YOURS <i>✳</i></p>
            <p aria-hidden="true">CRAFTED IN INDIA <i>✳</i> EAU DE PARFUM <i>✳</i> FOUR SIGNATURE SCENTS <i>✳</i> MADE TO BE YOURS <i>✳</i></p>
          </div>
        </div>
      </section>
      <div className="announcement">
        <p>Free delivery across India on orders over ₹4,999</p>
        <p className="announcement-center">Proudly Indian. Fragrance has no gender.</p>
        <a href="#discovery">Try all four →</a>
      </div>

      <header className="header">
        <a href="#top" className="logo" aria-label="ELSE home">ELSE</a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop all</a>
          <a href="#families" onClick={() => setMenuOpen(false)}>Scent families</a>
          <a href="#discovery" onClick={() => setMenuOpen(false)}>Discovery set</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our world</a>
        </nav>
        <div className="header-actions">
          <button type="button" className="text-button">Search</button>
          <button type="button" className="bag" aria-label={`Bag with ${bagCount} items`}>
            <Bag /><span>Bag</span><b>{bagCount}</b>
          </button>
          <button
            className="mobile-menu"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero-banner" id="top" aria-label="ELSE fragrance campaign">
        {banners.map((banner, index) => <img className={index === activeBanner ? 'active' : ''} src={banner} alt={index === 0 ? 'ELSE: Four fragrances, endless you' : 'ELSE: Four moods, one essence'} key={banner} />)}
        <a href="#shop" className="banner-link" aria-label="Explore the ELSE fragrance collection" />
        <div className="banner-controls">
          <button type="button" aria-label="Previous campaign" onClick={() => setActiveBanner((activeBanner + banners.length - 1) % banners.length)}>←</button>
          {banners.map((_, index) => <button type="button" className={activeBanner === index ? 'active' : ''} aria-label={`Show campaign ${index + 1}`} onClick={() => setActiveBanner(index)} key={index} />)}
          <button type="button" aria-label="Next campaign" onClick={() => setActiveBanner((activeBanner + 1) % banners.length)}>→</button>
        </div>
      </section>

      <section className="promise-strip" aria-label="Product promises">
        <div><span>01</span><p>Genderless, always</p></div>
        <div><span>02</span><p>Kind to skin</p></div>
        <div><span>03</span><p>8+ hour wear</p></div>
        <div><span>04</span><p>Made in small batches</p></div>
      </section>

      <section className="shop section-shell" id="shop">
        <div className="section-title">
          <div>
            <p className="kicker">The original four</p>
            <h2>Pick your <i>energy.</i></h2>
          </div>
          <p>Four distinct personalities. All beautifully wearable. Layer two together when one mood is not enough.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product" key={product.name}>
              <div className="product-visual">
                <button type="button" className="product-image-trigger" onClick={() => setSelectedProduct(product)} aria-label={`View ${product.name} details`}>
                  <img src={product.image} alt={`${product.name} eau de parfum`} />
                </button>
                <span className="product-id">{product.id} / 04</span>
                <span className="size">50 ML</span>
                <button type="button" onClick={() => addItem(product.name)} aria-label={`Add ${product.name} to bag`}>
                  Add to bag <span>₹{product.price.toLocaleString('en-IN')}</span>
                </button>
              </div>
              <div className="product-heading">
                <h3><button type="button" className="product-title-button" onClick={() => setSelectedProduct(product)}>{product.name}</button></h3>
                <p>{product.mood}</p>
              </div>
              <p className="product-notes">{product.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="families section-shell" id="families">
        <div className="section-title compact">
          <div>
            <p className="kicker">Shop your way</p>
            <h2>Find your <i>feeling.</i></h2>
          </div>
          <a href="#shop">View all scents <Arrow /></a>
        </div>
        <div className="family-grid">
          {families.map((family, index) => (
            <a href="#shop" className="family-card" style={{ backgroundColor: family.color }} key={family.name}>
              <img src={family.image} alt={`Artistic ${family.name.toLowerCase()} scent mood`} />
              <div className="family-shade" />
              <span>0{index + 1}</span>
              <div className="family-name">
                <h3>{family.name}</h3>
                <p>{family.note}</p>
              </div>
              <i><Arrow diagonal /></i>
            </a>
          ))}
        </div>
      </section>

      <section className="note-reveal section-shell">
        <div className="note-heading">
          <p className="kicker">Inside the bottle</p>
          <h2>One scent.<br /><i>Three acts.</i></h2>
          <p>Explore all four fragrances. Hover over—or tap—each bottle to let it dissolve into its notes.</p>
          <div className="scent-controls">
            <button
              type="button"
              aria-label="Previous fragrance"
              onClick={() => { setActiveScent((activeScent - 1 + scentStories.length) % scentStories.length); setNotesOpen(false) }}
            >
              <Arrow />
            </button>
            <span>0{activeScent + 1} / 04</span>
            <button
              type="button"
              aria-label="Next fragrance"
              onClick={() => { setActiveScent((activeScent + 1) % scentStories.length); setNotesOpen(false) }}
            >
              <Arrow />
            </button>
          </div>
        </div>
        <button
          type="button"
          className={`note-stage ${notesOpen ? 'show-notes' : ''}`}
          onClick={() => setNotesOpen((open) => !open)}
          aria-label={`Reveal the fragrance notes for ${scentStory.name}`}
        >
          {scentStory.notes.map((note, index) => (
            <div
              className={`note-orbit orbit-${['one', 'two', 'three', 'four'][index]}`}
              style={{ backgroundColor: note.color }}
              key={`${scentStory.name}-${note.name}`}
            >
              <b>0{index + 1}</b><span>{note.name}</span><small>{note.type}</small>
            </div>
          ))}
          <img className="scent-bottle" src={scentStory.image} alt={`ELSE ${scentStory.name} eau de parfum bottle`} />
          <p className="hover-prompt">{notesOpen ? 'Tap to close' : 'Hover to reveal'}</p>
        </button>
        <div className="note-caption">
          <p className="active-scent-name">{scentStory.name}</p>
          <span>OPENING</span><p>{scentStory.notes[0].name}</p>
          <span>HEART</span><p>{scentStory.notes[1].name} · {scentStory.notes[2].name}</p>
          <span>DRYDOWN</span><p>{scentStory.notes[3].name}</p>
          <div className="scent-dots" aria-label="Choose fragrance">
            {scentStories.map((scent, index) => (
              <button
                type="button"
                className={index === activeScent ? 'active' : ''}
                onClick={() => { setActiveScent(index); setNotesOpen(false) }}
                aria-label={`View ${scent.name}`}
                key={scent.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="discovery section-shell" id="discovery">
        <div className="discovery-art">
          <div className="discovery-bottles">
            {bottleArtwork.map((bottle) => <img key={bottle.name} src={bottle.image} alt={`ELSE ${bottle.name} perfume`} />)}
          </div>
          <span className="art-note">four little moods</span>
        </div>
        <div className="discovery-copy">
          <p className="kicker">The discovery edit</p>
          <h2>Try before<br />you <i>commit.</i></h2>
          <p>Four 2ml sprays, enough time to meet every scent properly. Your ₹1,499 is fully redeemable against a full-size bottle.</p>
          <button type="button" className="primary-button dark" onClick={() => addItem('Discovery Set')}>
            Get the set — ₹1,499 <Arrow />
          </button>
          <span>Complimentary delivery across India over ₹4,999</span>
        </div>
      </section>

      <section className="community">
        <div className="community-title section-shell">
          <div>
            <p className="kicker">Worn by you</p>
            <h2>Real people.<br /><i>Really good</i> smells.</h2>
          </div>
          <div className="rating-block">
            <strong>4.9</strong>
            <span>★★★★★</span>
            <p>FROM 286 VERIFIED REVIEWS</p>
            <div className="reel-controls">
              <button
                type="button"
                aria-label="Previous customer videos"
                onClick={() => reelTrackRef.current?.scrollBy({ left: -reelTrackRef.current.clientWidth * 0.72, behavior: 'smooth' })}
              ><Arrow /></button>
              <button
                type="button"
                aria-label="Next customer videos"
                onClick={() => reelTrackRef.current?.scrollBy({ left: reelTrackRef.current.clientWidth * 0.72, behavior: 'smooth' })}
              ><Arrow /></button>
            </div>
          </div>
        </div>
        <div className="reel-track" ref={reelTrackRef}>
          {reels.map((reel, index) => (
            <article className="reel" key={reel.user}>
              <video
                src={reel.video}
                poster={reel.poster}
                muted
                loop
                playsInline
                autoPlay={index < 3}
                preload={index < 3 ? 'metadata' : 'none'}
                aria-label={`Customer video from ${reel.user}`}
              />
              <div className="reel-top">
                <span className="reel-avatar">M°</span>
                <p>{reel.user}</p>
                <b>VERIFIED</b>
              </div>
              <div className="reel-bottom">
                <div className="stars">★★★★★</div>
                <blockquote>“{reel.quote}”</blockquote>
                <p>WEARING / {reel.product}</p>
              </div>
              <span className="reel-number">0{index + 1}</span>
            </article>
          ))}
        </div>
        <div className="community-footer section-shell">
          <p><b>{reels.length} stories</b> · Tag @elsefragrances to be featured</p>
          <a href="#shop">Shop their favorites <Arrow /></a>
        </div>
      </section>

      <section className="reviews-section section-shell">
        <div className="reviews-intro">
          <p className="kicker">The word on skin</p>
          <h2>Loved in<br /><i>real life.</i></h2>
          <div className="reviews-score"><strong>4.9</strong><span>★★★★★</span><p>286 VERIFIED CUSTOMERS</p></div>
        </div>
        <div className="review-carousel" onMouseEnter={() => setReviewsPaused(true)} onMouseLeave={() => setReviewsPaused(false)}>
          <div className="review-cards" ref={reviewTrackRef}>
            {writtenReviews.map((review, index) => (
              <article className="review-card" key={review.name}>
                <div><span>★★★★★</span><b>0{index + 1}</b></div>
                <blockquote>“{review.quote}”</blockquote>
                <footer>
                  <p><strong>{review.name}</strong><span>{review.city}</span></p>
                  <small>WORE / {review.scent}</small>
                </footer>
              </article>
            ))}
          </div>
          <div className="review-controls" aria-label="Review carousel controls">
            <button type="button" aria-label="Previous reviews" onClick={() => scrollReviews(-1)}>←</button>
            <button type="button" aria-label="Next reviews" onClick={() => scrollReviews(1)}>→</button>
          </div>
        </div>
      </section>

      <section className="service-bar">
        <div><b>COMPLIMENTARY DELIVERY</b><span>Across India on orders over ₹4,999</span></div>
        <div><b>30-DAY RETURNS</b><span>On unopened full-size bottles</span></div>
        <div><b>TRY BEFORE FULL SIZE</b><span>₹1,499 discovery credit included</span></div>
        <div><b>REAL HUMAN HELP</b><span>Studio support, Monday–Friday</span></div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="faq-heading">
          <p className="kicker">Good to know</p>
          <h2>Questions,<br /><i>answered.</i></h2>
          <p>Everything you need before finding your next signature—or email us at hello@elsefragrances.in.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <article className={isOpen ? 'open' : ''} key={faq.question}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                  <span>0{index + 1}</span>
                  <strong>{faq.question}</strong>
                  <i>{isOpen ? '−' : '+'}</i>
                </button>
                <div><p>{faq.answer}</p></div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="journal section-shell" id="journal">
        <div className="section-title compact">
          <div><p className="kicker">The ELSE journal</p><h2>Smell <i>curious.</i></h2></div>
          <a href="#journal">Read all stories <Arrow /></a>
        </div>
        <div className="journal-grid">
          <article>
            <div><img src="https://images.unsplash.com/photo-1676950933747-5f886cadf014?auto=format&fit=crop&w=1000&q=90" alt="Perfume beside flowers" /></div>
            <p>SCENT SCHOOL · 5 MIN</p><h3>How to find a signature scent without following the crowd</h3>
          </article>
          <article>
            <div><img src="https://images.unsplash.com/photo-1620057760905-820d1d953225?auto=format&fit=crop&w=1000&q=90" alt="Yellow tulips in soft light" /></div>
            <p>NOTES · 3 MIN</p><h3>Why your perfume smells different on everyone</h3>
          </article>
          <article>
            <div><img src="https://images.unsplash.com/photo-1743074858477-16c39ea5dc76?auto=format&fit=crop&w=1000&q=90" alt="Flowers on a shimmering surface" /></div>
            <p>STUDIO VISIT · 7 MIN</p><h3>Inside the making of our original four</h3>
          </article>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="kicker">Keep in touch</p>
          <h2>{joined ? 'Welcome to the good-smell club.' : <>A little note<br />from <i>us.</i></>}</h2>
        </div>
        {!joined && (
          <form onSubmit={(event) => { event.preventDefault(); if (email) setJoined(true) }}>
            <p>New scents, studio stories, and 10% off your first full-size bottle.</p>
            <div><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" aria-label="Email address" /><button type="submit"><Arrow /></button></div>
          </form>
        )}
      </section>

      <footer>
        <div className="footer-main">
          <a href="#top" className="logo footer-logo">ELSE</a>
          <div><h4>Shop</h4><a href="#shop">All fragrance</a><a href="#discovery">Discovery set</a><a href="#families">Scent families</a><a href="#shop">Gift cards</a></div>
          <div><h4>About</h4><a href="#about">Our story</a><a href="#about">Ingredients</a><a href="#journal">Journal</a><a href="#about">Stockists</a></div>
          <div><h4>Help</h4><a href="#top">Shipping & returns</a><a href="#top">Contact</a><a href="#top">FAQ</a><a href="#top">Instagram</a></div>
        </div>
        <div className="footer-bottom"><p>© 2026 ELSE FRAGRANCES INDIA</p><p>MADE FOR EVERY BODY · INDIA</p><p>PRIVACY · TERMS</p></div>
      </footer>

      {notice && <div className="toast" role="status">{notice}</div>}
    </main>
  )
}
