import React from 'react'
import Header from "@/components/Header"
import Title from '@/components/Title'
import ProjectInfo from '@/components/ProjectInfo'
import Footer from '@/components/Footer'

function Steganography() {
  return (
    <main>
      <Header page="projects"/>
      <Title title="Steganography Application"/>
      
      <section id="project-info" className="on-load-animation-500 flex justify-center">
        <ProjectInfo
        contributions={["Image steganography implementation (.png and .bmp)", "Frame-based video steganography implementation (.mp4)"]}
        duration="Aug 2025 – Sept 2025"
        brief="This program is used to encode secret data within other image, video or audio files, as well as decode files to retrieve the secret data.
        The embedding/ encoding behaviour is highly customizable and supports visualizations in the form of difference maps,
        waveforms, spectrograms, and histograms for a deeper analysis."
        tools={['Python', 'OpenCV']}
        features={[
          "Customizable embedding plans, such as pseudorandom or sequential embedding patterns, LSB patterns, selectable start pixel, and encoding every Nth frame (for frame-based video steganography)",
          "Supports a high variety of payload formats (simple text files, pdf, images, executables) and cover objects (.png, .bmp, .wav, .mp4)",
          "Usage of a key for encoding and decoding",
          "Optional additional AES-256 encryption of the payload using a password",
          "Visualizations for steganalysis"
        ]}
        images={[
        ]}
        singleImages={[
          {
            image: "/images/steganography/steganography-gui.png",
            caption: "View of GUI",
            description: "Encoding payload.txt into a .bmp file with a custom start pixel, a user specified key, and the maximum number of LSBs to use."
          },
        ]}
            
        />
      </section>
      
      <Footer></Footer>
    </main>
  )
}

export default Steganography