.site-nav {
  width: min(100% - 2rem, var(--content-width));
  min-height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-logo img {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.menu-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.menu-links a {
  color: var(--muted);
  font-weight: 700;
  text-decoration: none;
}

.menu-links a:hover {
  color: var(--text);
}

.menu-toggle {
  display: none;
}

@media (max-width: 620px) {
  .site-nav {
    position: relative;
    flex-wrap: wrap;
    padding: 0.6rem 0;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .menu-links {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.5rem 0;
  }

  .menu-links.is-open {
    display: flex;
  }

  .menu-links a {
    padding: 0.8rem;
    border-top: 1px solid var(--border);
  }
}