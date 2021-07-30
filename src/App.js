import React from 'react';

function Food({ fav }){
  return <h1>I like {fav}</h1>
}

const foodILike = [
  {
    name:"김치",
    image:"https://www.google.com/search?q=%EA%B9%80%EC%B9%98&sxsrf=ALeKk02gnUBnBkNTnvF2Ok9-Il0X1eL5mw:1627605074113&tbm=isch&source=iu&ictx=1&fir=Z4u2cFmtMTy4aM%252CZjMQxtyXjkglKM%252C%252Fm%252F018dz_&vet=1&usg=AI4_-kSZKFDb1Jp7Xx1DEGx5Qhd53RNwnA&sa=X&ved=2ahUKEwiboZuyxYnyAhUQZt4KHUmdBLYQ_B16BAg_EAE#imgrc=Z4u2cFmtMTy4aM",
  },
  {
    name:"삼겹살",
    image:"https://www.google.com/search?q=%EC%82%BC%EA%B2%B9%EC%82%B4&sxsrf=ALeKk012Wc5g-RDYFMuMOvqMd4NpgnUU4w:1627605124458&tbm=isch&source=iu&ictx=1&fir=n0N7K_dsJm80aM%252ClHAo8SAI3h1DlM%252C%252Fg%252F11bc58gmwd&vet=1&usg=AI4_-kSNg_PbzH0xqK5WlskpnVIwpmMDGg&sa=X&ved=2ahUKEwiEgJzKxYnyAhWSDd4KHValAR4Q_B16BAgsEAE#imgrc=n0N7K_dsJm80aM"
  },
  {
    name:"비빔밥",
    image:"https://www.google.com/search?q=%EB%B9%84%EB%B9%94%EB%B0%A5&sxsrf=ALeKk01rhYRGTKjHAFH3JQkF6KxuJtroxg:1627605143734&tbm=isch&source=iu&ictx=1&fir=Fz_8GHM6ze9U8M%252CLLx6Fq5KFqTvRM%252C%252Fm%252F03g917&vet=1&usg=AI4_-kQc_maNIM6E0ECKjazrPOxW0GAM4A&sa=X&ved=2ahUKEwid1rTTxYnyAhXSEYgKHWAXAVUQ_B16BAgoEAE#imgrc=Fz_8GHM6ze9U8M"
  },
  {
    name:"돈까스",
    image:"https://www.google.com/search?q=%EB%8F%88%EA%B9%8C%EC%8A%A4&sxsrf=ALeKk00szM7Ak7xGCsMU4bJhvdUQOJcT0w:1627605165480&tbm=isch&source=iu&ictx=1&fir=nO364Mo4-yBWFM%252CwSDB0BPDdctn-M%252C%252Fm%252F0f99t&vet=1&usg=AI4_-kQrAWfk4EQOCSPrbWrcBjc4dfszdQ&sa=X&ved=2ahUKEwja7OPdxYnyAhUbMN4KHb6IAbQQ_B16BAgwEAE#imgrc=nO364Mo4-yBWFM"
  },
  {
    name:"김밥",
    image:"https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&sxsrf=ALeKk03j3QLA-ZDHx9mX7EyFJnTzXsCM6w:1627605180552&tbm=isch&source=iu&ictx=1&fir=cAGh_3mzWwfySM%252CZLa-Qodd5xS7vM%252C%252Fm%252F048wsd&vet=1&usg=AI4_-kQKCzVoLeb4ZxOQgrr8aH4eEa9_bQ&sa=X&ved=2ahUKEwjr0PvkxYnyAhXSzmEKHTOFACkQ_B16BAgyEAE#imgrc=cAGh_3mzWwfySM"
  },
];

function App() {
  //return <div className="App" />;
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
