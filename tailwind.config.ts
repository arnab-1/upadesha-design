
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sanskrit: ['"Tiro Devanagari Sanskrit"', 'serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				midnight: {
					DEFAULT: '#0F1A2A',
					50: '#f0f4f8',
					100: '#e6edf5'
				},
				skyblue: {
					DEFAULT: '#a1c4fd',
					50: '#e6f4f9',
					100: '#dceefc',
					200: '#c2e9fb',
					300: '#a1c4fd'
				},
				pearl: {
					DEFAULT: '#f7fbfc',
					50: '#ffffff',
					100: '#f7fbfc'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(165, 180, 252, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(165, 180, 252, 0.9)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'yantra-pattern': "url('/yantra-bg.svg')",
				'hero-gradient': 'linear-gradient(to bottom, rgba(240, 249, 255, 0.95), rgba(226, 232, 240, 0.85))',
				'cool-gradient': 'linear-gradient(135deg, #7c3aed 10%, #3b82f6 90%)',
				'blue-gradient': 'linear-gradient(135deg, #dbeafe 10%, #eff6ff 90%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
