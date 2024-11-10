function Footer() {
  return (
    <footer style={{ backgroundColor: '#ccd5ae', padding: '20px 0', textAlign: 'center' }}>
      <p>&copy; 2024 Muhammad Haris</p>
      <p>Connect with me:</p>
      <div style={{ display: 'inline-flex', gap: '10px' }}>
        <a href="https://www.linkedin.com/in/muhammad-haris-524b9b169/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" height="30" />
        </a>
        <a href="https://github.com/mharis337" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="30" height="30" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
