# Deployment Instructions

## Quick Demo Access

### Option 1: Local Preview (Running Now!)
The preview server should be running. Check your terminal for the URL (usually http://localhost:4173)

**Demo Mode URL**: http://localhost:4173/?demo=true
**Real Mode URL**: http://localhost:4173/

### Option 2: Deploy to Vercel (Recommended for Sharing)

1. **Install Vercel CLI** (if not installed):
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts** - it will give you a live URL!

4. **Access URLs**:
   - **Demo Mode**: `https://your-url.vercel.app/?demo=true`
   - **Real Mode**: `https://your-url.vercel.app/`

## How It Works

### Demo Mode (`?demo=true`)
- Shows admin interface with day selector
- You can test ALL days right now
- Perfect for testing and previewing

### Real Mode (normal URL)
- **Strict date locking**: Only shows the current day
- Future days show a beautiful "locked" message with countdown
- She can't access future days - must wait for the actual date!

## Share With Her

Give her the **real mode URL** (without `?demo=true`). She'll only see:
- Today's day (if it's during Valentine's week)
- Locked message for future days with countdown
- Beautiful waiting screen until the day arrives

## Testing

- Use `?demo=true` to test all days
- Use normal URL to see what she'll see
- Change your system date to test different days (or wait for the actual dates!)

