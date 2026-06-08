// components/DarkModeTest.tsx
"use client";

import { useEffect, useState } from "react";

export default function DarkModeTest() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
    
    // Watch for class changes on html element
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      setTheme(isDarkNow ? 'dark' : 'light');
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('gibora-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('gibora-theme', 'light');
    }
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 9999,
        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
        color: theme === 'dark' ? '#f3f4f6' : '#111827',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
        fontSize: '14px',
        minWidth: '200px'
      }}
    >
      <div style={{ marginBottom: '8px' }}>
        <strong>Theme:</strong> {theme}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <strong>HTML Class:</strong> {theme === 'dark' ? 'dark' : 'no dark class'}
      </div>
      <div style={{ marginBottom: '12px' }}>
        <strong>Has 'dark':</strong> {theme === 'dark' ? '✅ Yes' : '❌ No'}
      </div>
      <button 
        onClick={toggleTheme}
        style={{
          width: '100%',
          padding: '6px 12px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: '500'
        }}
      >
        Toggle Theme
      </button>
      <div style={{ fontSize: '10px', marginTop: '8px', opacity: 0.7 }}>
        Background should change when toggling
      </div>
    </div>
  );
}