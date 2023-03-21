import { useState } from 'react'
import './Modal.css'

export function SoftwareModal({ isSEModalOpen, closeSEModal }) {
  return (
    <div className='modal-container'>
      {isSEModalOpen && (
        <div className='modal-overlay'>
          <div className='modal'>
            <button onClick={closeSEModal}>Close Modal</button>
            <h1>Software Engineering Content</h1>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function DevModal({isDevModalOpen, closeDevModal}) {

  return (
    <div className='modal-container'>
      {isDevModalOpen && (
        <div className='modal-overlay'>
          <div className='modal'>
            <button onClick={closeDevModal}>Close Modal</button>
            <h1>Developer Content</h1>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function DesignModal({ isDesignModalOpen, closeDesignModal }) {
  return (
    <div className='modal-container'>
      {isDesignModalOpen && (
        <div className='modal-overlay'>
          <div className='modal'>
            <button onClick={closeDesignModal}>Close Modal</button>
            <h1>Design Modal</h1>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </div>
  )
}

// EXAMPLE WITH EMBEDDED FUNCTIONS

// export function DevModal() {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   function openModal() {
//     setIsModalOpen(true)
//   }

//   function closeModal() {
//     setIsModalOpen(false)
//   }

//   return (
//     <div className='modal-container'>
//       <button onClick={openModal}>Open Modal</button>

//       {isModalOpen && (
//         <div className='modal-overlay'>
//           <div className='modal'>
//             <button onClick={closeModal}>Close Modal</button>
//             <h1>Modal Content</h1>
//             <p>This is the content of the modal.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
