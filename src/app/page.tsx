const mockUrls = [
  "https://utfs.io/f/13b20da5-9ce8-4e07-a238-c47aa6fcbf41-byt81c.jpg",
  "https://utfs.io/f/9c9a465c-e15f-4572-9e38-9b7d7709f9f2-byt7x6.jpg",
  "https://utfs.io/f/226d0e0c-dec1-4d46-8e68-e077c7fd437d-byt818.jpg",
  "https://utfs.io/f/1fffa833-3c66-4ad7-84d5-33b18bce2667-byt7xy.jpg",
  "https://utfs.io/f/32563e1a-e6c8-4987-bd7a-dfd5946b631d-byt7zr.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      {mockImages.map((img) => (
        <div key={img.id} className="w-80">
          <img src={img.url} alt="test image" />
        </div>
      ))}
    </main>
  );
}
