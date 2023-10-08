# Otobüs Bilet Arama Uygulaması

Bu proje, otobüs biletlerini arayabilen kullanıcıları hedefler. Kullanıcılar oturum açarak otantike olabilirler. Proje, TypeScript, Next.js, ContextAPI, Formik, Framer Motion ve LocalStorage gibi teknolojileri kullanır.

## Demo

lojiper-test-case-alpha.vercel.app

## Seferler

Seferler, [bu endpoint](https://kadersarikaya.github.io/Data/seferler.json) üzerinden alınır. Uygulamada şu seferler bulunmaktadır:

1. İstanbul - Ankara
2. Ankara - İzmir
3. Adana - İstanbul
4. İzmir - Antalya
5. İstanbul - Adıyaman

## Kullanılan Teknolojiler

- TypeScript
- Next.js
- ContextAPI
- Formik
- Framer Motion
- LocalStorage

## Proje Kurulumu

Projeyi çalıştırmak için [Node.js](https://nodejs.org/) yüklü olmalıdır. Ardından şu adımları izleyebilirsiniz:

1. Bu depoyu klonlayın:

   ```bash
   git clone [<repo-url>](https://github.com/kadersarikaya/test-case.git)https://github.com/kadersarikaya/test-case.git)

2. Proje dizinine gidin:
  ```
  cd your-project-directory
```

3. Gerekli bağımlılıkları yükleyin:
   ```
  npm install
  ``` 

4. Projeyi başlatın:
```
 npm run dev
```

Bu adımlardan sonra projeniz http://localhost:3000 adresinde çalışacaktır.

## Önemli Notlar

Payment Sayfası: Ödeme sayfasında geçerli bir kart numarası ve CVC girişi yapabilirsiniz.
Cinsiyet Ayrımı: Otobüs koltuğu seçimi sırasında cinsiyet ayrımı yapılmamıştır.
   
