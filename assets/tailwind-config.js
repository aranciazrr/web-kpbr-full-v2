/* Konfigurasi warna & font Tailwind, dipakai semua halaman */
tailwind.config = {
      theme: {
        extend: {
          colors: {
            kiswah: {
              950: '#051811',
              900: '#08261c',
              800: '#0e382a',
              700: '#164e3b',
              600: '#236850',
            },
            turats: {
              50: '#fbf8f1',
              100: '#f4ebd9',
              200: '#eadbc0',
              300: '#dcc59e',
            },
            kuningan: {
              300: '#e8cb7a',
              400: '#d6b154',
              500: '#c59638',
              600: '#a37722',
              700: '#7d5916',
            },
            jati: {
              900: '#1c140d',
              800: '#2d2015',
            }
          },
          fontFamily: {
            serif: ['"Lora"', 'Georgia', 'serif'],
            arabic: ['"Amiri"', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          boxShadow: {
            'ornate': '0 15px 40px -10px rgba(8, 38, 28, 0.14), 0 0 0 1px rgba(197, 150, 56, 0.35)',
            'ornate-dark': '0 20px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(214, 177, 84, 0.35)',
            'gold-glow': '0 0 25px rgba(197, 150, 56, 0.35)',
          }
        }
      }
    }
