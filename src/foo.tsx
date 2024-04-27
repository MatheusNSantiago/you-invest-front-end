// import { LayoutGrid } from "./components/ui/layout-grid";
// import { useRef } from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./components/ui/card";
// import { Button } from "./components/ui/button";

// function Grid() {
//   const NOTICIAS = Array.from({ length: 10 }, () => {
//     const idx = Math.floor(Math.random() * noticias.length);
//     return noticias[idx];
//   });
//
//   return (
//     <LayoutGrid className="grid md:auto-rows-[18rem] md:grid-cols-4 gap-4 mx-auto "
//       cards={NOTICIAS.map((noticia, idx) => {
//         const isImportant = [2, 8].includes(idx);
//         return {
//           id: idx,
//           className: isImportant ? "md:col-span-2" : "",
//           titulo: noticia.titulo,
//           content: <NoticiaCard key={idx} noticia={noticia} />,
//           thumbnail: noticia.capa,
//         };
//       })}
//     />
//   );
// }



// function NoticiaCard({ noticia }: { noticia: Noticia }) {
//   const wrapperRef = useRef(null);
//   // UseIsOutsideClick(wrapperRef);
//
//   return (
//     <Card
//       ref={wrapperRef}
//       className="flex flex-col gap-4 text-wrap justify-end"
//     >
//       <CardHeader>
//         <CardTitle>{noticia.titulo}</CardTitle>
//         {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
//       </CardHeader>
//       <CardContent>
//         {noticia.pontos_chave.map((ponto, i) => (
//           <li key={i}>{ponto}</li>
//         ))}
//       </CardContent>
//
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">Cancel</Button>
//         <Button>Deploy</Button>
//       </CardFooter>
//
//       {/* <p className="text-lg">{noticia.texto}</p> */}
//       {/* <div className="flex flex-col gap-2"> */}
//       {/*   <h2 className="text-xl font-bold">Pontos Chave</h2> */}
//       {/*   <ul className="list-disc list-inside"> */}
//       {/*     {noticia.pontos_chave.map((ponto, i) => ( */}
//       {/*       <li key={i}>{ponto}</li> */}
//       {/*     ))} */}
//       {/*   </ul> */}
//       {/* </div> */}
//       {/* <a */}
//       {/*   href={noticia.url} */}
//       {/*   target="_blank" */}
//       {/*   rel="noreferrer" */}
//       {/*   className="text-blue-500" */}
//       {/* > */}
//       {/*   Ver mais */}
//       {/* </a> */}
//     </Card>
//   );
// }

