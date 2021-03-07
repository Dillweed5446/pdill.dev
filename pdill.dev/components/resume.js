import React from 'react'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Resume } from '../public/Paul_Dill_-_Web_Developer.pdf'
import dynamic from 'next/dynamic'

const PdfViewer = dynamic(
  () => import('./PdfViewer'),
  { ssr: false }
)

function ResumePDF (file, width, pageNumber) {
  return (
    <PdfViewer file={file} width={width} pageNumber={pageNumber} href={Resume}/>
  )
}
ResumePDF(Resume, 200, 1)

// export default function ResumePDF () {
//   return (
//     <div>
//       <Document file={Resume} loading="Loading PDF...">
//         <Page pageNumber={1}/>
//       </Document>
//     </div>
//   )
// }
