import './MainPage.css'

const archives = [
  {
    slug: 'films',
    index: '01',
    title: 'Films',
    description: 'Frames I keep replaying in my head.',
    count: 4,
    color: 'orange',
  },
  {
    slug: 'series',
    index: '02',
    title: 'Series',
    description: 'Worlds I return to on repeat.',
    count: 4,
    color: 'navy',
  },
  {
    slug: 'books',
    index: '03',
    title: 'Books',
    description: 'Pages with the corners folded down.',
    count: 4,
    color: 'gold',
  },
  {
    slug: 'video-games',
    index: '04',
    title: 'Video Games',
    description: "Places I've spent whole seasons of my life.",
    count: 4,
    color: 'olive',
  },
]

const collections = [
  {
    title: 'Favorite Quotes',
    tag: 'Quotes',
    color: 'orange',
    page: '1 / 8',
    kind: 'quote',
    quote: 'I dream my painting and I paint my dream.',
    source: 'Vincent van Gogh',
  },
  {
    title: 'Essays',
    tag: 'Essays',
    color: 'navy',
    page: '1 / 6',
    kind: 'quote',
    quote:
      'The internet made distance cheap and attention expensive. We used to travel for wonder; now wonder travels to us, and we scroll past it.',
    source: 'On Attention — personal essay',
  },
  {
    title: 'Book Paragraphs',
    tag: 'Paragraphs',
    color: 'teal',
    page: '1 / 5',
    kind: 'quote',
    quote:
      "There are some things you can't understand until you have lived a certain number of years.",
    source: 'Norwegian Wood — Haruki Murakami',
  },
  {
    title: 'Facts Worth Knowing',
    tag: 'Facts',
    color: 'gold',
    page: '1 / 4',
    kind: 'quote',
    quote:
      'Sunflowers move throughout the day to track the sun, a behaviour called heliotropism — mostly while young.',
    source: 'Botany',
  },
  {
    title: 'Photos',
    tag: 'Photos',
    color: 'rust',
    page: '1 / 6',
    kind: 'photo',
    meta: 'Desk, late September',
    caption: 'Coffee gone cold, notebook gone full',
  },
  {
    title: 'Videos',
    tag: 'Videos',
    color: 'olive',
    page: '2 / 3',
    kind: 'video',
    duration: '13:00',
    caption: 'Restoring an old oil painting, start to finish',
  },
]

function FolderCard({ index, title, description, count, color }) {
  return (
    <article className="folder-card" data-color={color}>
      <span className="folder-index">Folder {index}</span>
      <h3>{title}</h3>
      <p className="folder-desc">{description}</p>
      <div className="folder-foot">
        <span>{count} entries</span>
        <span className="folder-arrow" aria-hidden="true">
          →
        </span>
      </div>
    </article>
  )
}

function CollectionCard({
  title,
  tag,
  color,
  page,
  kind,
  quote,
  source,
  meta,
  caption,
  duration,
}) {
  return (
    <article className="collection-card">
      <div className="collection-top">
        <span className="tag" data-color={color}>
          {tag}
        </span>
        <span className="page-indicator">{page}</span>
      </div>
      <h3>{title}</h3>

      {kind === 'quote' && (
        <>
          <p className="quote">“{quote}”</p>
          <p className="source">— {source}</p>
        </>
      )}

      {kind === 'photo' && (
        <>
          <div className="media-placeholder photo">
            <span className="media-meta">{meta}</span>
          </div>
          <p className="caption">{caption}</p>
        </>
      )}

      {kind === 'video' && (
        <>
          <div className="media-placeholder video">
            <span className="play-button" aria-hidden="true">
              ▶
            </span>
            <span className="media-meta">{duration}</span>
          </div>
          <p className="caption">{caption}</p>
        </>
      )}

      <div className="collection-foot">
        <span className="dots" aria-hidden="true">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={i === 0 ? 'dot active' : 'dot'} />
          ))}
        </span>
        <span className="see-all">See all →</span>
      </div>
    </article>
  )
}

function MainPage() {
  const year = new Date().getFullYear()

  return (
    <div className="alamanac">
      <header className="site-header">
        <div className="wrap header-row">
          <nav className="site-nav">
            <a href="#archives">Archives</a>
            <a href="#collections">Collections</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-row">
          <span className="badge">Est. {year} · Volume I</span>
          <h1>The Sunflower Alamanac</h1>
          <p className="tagline">
            A personal museum of things worth keeping — painted in warm
            color, framed in thick black lines. Wander the archives, or let
            the collections cycle through what I love.
          </p>
        </div>
      </section>

      <section className="archives" id="archives">
        <div className="wrap">
          <div className="section-row">
            <h2>The Archives</h2>
            <span className="hint">Click a folder to open it</span>
          </div>
          <div className="folder-grid">
            {archives.map((folder) => (
              <FolderCard key={folder.slug} {...folder} />
            ))}
          </div>
        </div>
      </section>

      <section className="collections" id="collections">
        <div className="wrap">
          <div className="section-row">
            <h2>The Collections</h2>
            <span className="hint">Cycling on their own · hours to pause</span>
          </div>
          <div className="collection-grid">
            {collections.map((card) => (
              <CollectionCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap">
          <p className="footer-title">The Sunflower Alamanac</p>
          <p className="footer-credit">Created by Anmol</p>
        </div>
      </footer>
    </div>
  )
}

export default MainPage
