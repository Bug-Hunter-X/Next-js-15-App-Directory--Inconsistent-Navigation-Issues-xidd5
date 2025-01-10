```javascript
// pages/index.js
export default async function Home() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return (
      <div>
        <h1>Data from API:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error fetching data</div>;
  }
}

// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Data from API' });
}
```