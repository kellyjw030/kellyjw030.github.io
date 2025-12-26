import React from 'react'
import Header from "@/components/Header"
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import ProjectInfo from '@/components/ProjectInfo'

function LabComply() {
  return (
    <main>
      <Header page="projects"/>
      <Title title="LabComply - AI Powered Lab Compliance Monitoring"/>
      
      <section id="project-info" className="on-load-animation-500 flex justify-center">
        <ProjectInfo
        contributions={[
          "Detection Pipeline (Human to food/ drink association)",
          "Integration of surveillance equipment to the system",
          "Integrating host machine GPUs with Docker containers",
          "Some frontend and backend dev for the dashboard",
          "Technical documentation, diagrams, and user manuals"
        ]}
        duration="May 2025 – Nov 2025"
        brief="Bringing food and drinks into these spaces heightens the chances of spillage and the presence
              of bugs, which could lead to damaged lab equipment.
              This project utilizes pretrained YOLO models, IP cameras, and an NVR within the labs to automate
              the detection of food and beverages to help lab safety personnel at SIT better
              enforce a 'No food or drinks' policy in laboratories. This project was presented at the Asian Conference on Safety & Education in Laboratory (ACSEL) 2025."
        tools={['Python', 'Flask', 'PostgreSQL', 'Docker', 'Linux (Ubuntu)', 'OpenCV']}
        features={[
          "Detection of food/ drinks mapped to most likely owner",
          "Facial recognition to identify repeated violators",
          "Dashboard to manage cameras, captured events, labs",
          "Email and Telegram notification to inform lab personnel of repeated violations"
        ]}
        images={[]}
        singleImages={[
        {
          image: "/images/lab-comply/lab-comply-detections.png",
          caption: "Noncompliance event indicated with bounding boxes",
          description: "The system utilizes RESTful APIs to integrate functions such as automated camera discovery, facial comparison and camera management. This solution enables the seamless addition of multiple cameras, eliminating manual adding processes."
        },
        {
          image: "/images/lab-comply/lab-comply-nc.png",
          caption: "View a details of noncompliance",
          description: "Lab safety staff are able to view evidence of the noncompliance through a snapshot and video footage (retrieved from the NVR). The bounding boxes shown in the snapshot indicate the violator and the food/ drink brought in."
        }
      ]}
        />
        
      </section>

      
      <Footer></Footer>
    </main>
  )
}

export default LabComply