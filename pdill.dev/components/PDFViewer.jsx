import { Document, Page, pdfjs } from 'react-pdf'
import React from 'react'
import PropTypes from 'prop-types'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfViewer = ({ file, width, pageNumber }) => (
  <Document file={file}>
    <Page pageNumber={pageNumber} width={width} />
  </Document>
)

export default PdfViewer

PdfViewer.propTypes = {
  file: PropTypes.any.isRequired,
  width: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired
}

// import React from 'react'
// import PropTypes from 'prop-types'
// import {
//   Document, Page
// } from 'react-pdf/dist/esm/entry.webpack'

// const PdfViewer = ({
//   url, width, pageNumber
// }) => (
//   <Document file={url}>
//     <Page
//       pageNumber={pageNumber}
//       width={width}
//     />
//   </Document>
// )

// export default PdfViewer

// PdfViewer.propTypes = {
//   url: PropTypes.any.isRequired,
//   width: PropTypes.number.isRequired,
//   pageNumber: PropTypes.number.isRequired
// }
