import React from "react";


const ProductGrid = () => {
  return (
    <div className="bg-white">
      {/* New Ceramics Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            New ceramics
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-12">
          <ProductCard
            image="https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhnF7CVBIKnx72pcnWcgTZkBXLK8I5yTzBajN4VPzDRNTiWV64VGxSPmBLOUIZqldUSwNWgNcEyjLp2jdI8DN2SDJL-N-WdBF7oBMgFfETEjJ3HJTnRn9tN9jeYexyPQkbNy0p0tLRqZ4noUNaYTz0fn~Mg90FmpM4b11BZ8Vluf1GjC7qleuC6Cg6FU54lOqXCd5qOHb~po3O0MukS8eY6dEtuFq7auYO7Xo1dJSSbmx-wxVL90cfduJO~VNT2u-tNROVAt4VS7Q60jz1wsWwedH4VL9ZFhKP7d48aGzh9VS4DvfTo3WtPh4vgsFvVkrLTAeG4AuVLonsDDahlsIg__"
            title="The Dandy chair"
            price="£250"
          />
          <ProductCard
            image="https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5~kAr5sCKgyS~pH00Vdud6EC-Ccl6Xv2cv4DyM-kMXMT-ynCU7D0L4Raz-DEqTN0ICtFRilmLy1L-nEplq6fjVB44oGYw-iEx11YjL6q~Hrf7imqAQ4Zzk-QyQ917mHTId25Pis3xGKaumsszcO1g3H5pk9y~kDxa6UjwQoM2nFsNKKvvOzg~3zyn8xHfBQ8cUlFOAsxFVhl4jrXcY~M5WdfVgK2drwL~ck4TvSTNDeVsiTZGJOcv8Qom~OzAkWcASAZAwJ5AuKAt2ZFn5i8iWncMqZ9s6P70W6cQjwKibe-VazED~ysr1JLSjV9h7qEwuEjgLK6a6lGafihA2now__"
            title="Rustic Vase Set"
            price="£155"
          />
          <ProductCard
            image="https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WhrmQkDOMkEVKaU3LLut6ygI-62V0QlxBSrku2lkiE8AOSVeXPEXKnsfmE3-rDG62omBX2tduXGhieDyKgYaS5~QNu9Q3ESkLeGo97tQsfVwjpcMICpQS8JcLKeiGya-BNbvdrrsStw7pBKmPIRug7z9fU4ago1mC5Jwdt9jNZn71BDegU2-R~w7gdCoP0Ynl6b2SGmbMYpX6iVtcQ6Cbiza-0Eq8RuXNTG37VxeD81Tn~Caum6JPEuZMciBwlf~oD2tDoljCh6AtWleQNPYvuXs30YhQs-ZKL9dTgisyR6hpQhNEQQ7VIh3g2NnRUw3rRykNfsjQdj7W3voSnJc9w__"
            title="The Silky Vase"
            price="£125"
          />
          <ProductCard
            image="https://s3-alpha-sig.figma.com/img/4747/f0e8/ffbabae5de21ee1b8c8ca6e83dd10f51?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQ6p-zgcQRHhrfVKOCfT2UGq4msA55Par4G-Zoc~XkFnVYCr8xZ2lS1STP~WdO~SkbttbRckM5Qd-bDS2dZrx1hcmONmV7yEgMVZL1P8FYbBBErLP5-qlsknpdIR3MKoYBlcu9-b9~EVwyvIvFjDRqbJfmeE9bEI22isk3P6pfapABTVDm6UGkxq6KYLZ7j1SzMTUP-x8WPtAPUNfvBILlIFJJl8vH2cwpaAnTYXeKd0j4u5~W-k99Qr4fvrpXZP91wq3FmtqgZkFaC15~UVu-KmjFdwQo~HSnko~m2oOZE2AhqDbhEecQW-e7FU-wLArOEQkQ~oy2BgKeobDI2M0g__"
            title="The Lucy Lamp"
            price="£399"
          />
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition">
            View collection
          </button>
        </div>
      </section>

      {/* Our Popular Products Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our popular products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-12">
          <ProductCard
            image="https://s3-alpha-sig.figma.com/img/5633/5375/b19dc98ccde98dc5e1e2fb1bd0dc3b72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDsqFDbfHP8bEBcjpLyyAoNhQqpBjO~5cTTTpiB4h3qkN15NK5cVfzxqV33rUJmlzTgJHo9weC4ns7BcrFO3SthViDnkr5IWMatO1pHrI-6e-GggQuvyo~-7fqNozISASFM4I5LhPKkzGx4xEQVeoYPtDdvoSKfuK-fByciKbf-rhMz5JsWQmiaeRbH2GVNkEKZfZoDpaKTZ3b4r5zvt5FuXOUBUbSMUyI37gjNz8Bw5I2zk2jTcj0xKpupbhCvJzXICRshOEQpK0H69RdY0wkVzQAEP69JZwBXuKJErRjVHDZufxSyS429se1HVKxJlBoOirSuUZh9ZTpPN1FaC1w__"
            title="The Poplar suede sofa"
            price="£980"
          />
          <ProductCard
            image="https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhnF7CVBIKnx72pcnWcgTZkBXLK8I5yTzBajN4VPzDRNTiWV64VGxSPmBLOUIZqldUSwNWgNcEyjLp2jdI8DN2SDJL-N-WdBF7oBMgFfETEjJ3HJTnRn9tN9jeYexyPQkbNy0p0tLRqZ4noUNaYTz0fn~Mg90FmpM4b11BZ8Vluf1GjC7qleuC6Cg6FU54lOqXCd5qOHb~po3O0MukS8eY6dEtuFq7auYO7Xo1dJSSbmx-wxVL90cfduJO~VNT2u-tNROVAt4VS7Q60jz1wsWwedH4VL9ZFhKP7d48aGzh9VS4DvfTo3WtPh4vgsFvVkrLTAeG4AuVLonsDDahlsIg__"
            title="The Dandy chair"
            price="£250"
          />
          <ProductCard
            image="https://s3-alpha-sig.figma.com/img/78e7/5abe/f99fff09807c6e277a683cd469bb041d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax6TivDfk~ayU7m5AJ31poHlQDIeQ~2H5OtfPWgIOZ9JJ5QAmBUGXPJvZRVXFJQTDwWkm2YNdl9sbnKjWUToheZSVMh4D7CN6f9uswpiZDLaJqFcscPSCgtw0YtQNG5oOF-7hUadxbQaaVt-mVBHCuxk~kANL9eeVDiKWi0lM7Iu6rziE06IWZflpVBz2Q2g958eTxHY08hLIipU6T8BiCX9ZqtlEUKcJlZB066xh0tWx1a3nAvqq4AZc6KuyzBKbAtKBHPDfttOxmMdrkNqzqAMLvM5qWDuU0GeCfgEOL15a4NgwiD1biTEwCoxIN6enuTvKWTna1BV0nYCIH~fDg__"
            title="The Dandy chair"
            price="£250"
          />
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition">
            View collection
          </button>
        </div>
      </section>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full h-60 md:h-72 bg-gray-200 overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  );
};

export default ProductGrid;
