export default function Header () {
  return <header className={'py-4 border-b mb-4 bg-white'}>
    <nav className={'page-width flex justify-between'}>
      <button className={'button'}>
        Return to store
      </button>

      <button className={'button'}>
        Sign in
      </button>
    </nav>
  </header>;
}