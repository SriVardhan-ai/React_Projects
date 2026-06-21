import React from "react";
import Card from "./components/Card.jsx"
const App=()=>{
  return(
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-5xl m-5">
          <b>Profile Grid</b>
        </h1>
      </div>
       <div className="flex flex-wrap gap-10 m-5">
      <Card name="Sri Vardhan" age={20} image="https://img.magnific.com/free-vector/cute-boy-with-thumbs-up-cartoon-vector-icon-illustration-people-holiday-icon-isolated-flat-vector_138676-14665.jpg?semt=ais_hybrid&w=740&q=80"/>
      <Card name="Laxmi Narayana" age={42} image="https://thumbs.dreamstime.com/b/cute-cartoon-cow-logo-template-white-background-mascot-animal-character-design-album-scrapbook-greeting-card-invitation-199083214.jpg"/>
      <Card name="Sri Vardhan" age={20} image="https://img.magnific.com/free-vector/cute-boy-with-thumbs-up-cartoon-vector-icon-illustration-people-holiday-icon-isolated-flat-vector_138676-14665.jpg?semt=ais_hybrid&w=740&q=80"/>
      <Card name="Nithya Sri" age={18} image="https://i.pinimg.com/736x/3b/92/35/3b9235b902cab472f8a8137debb5a27e.jpg"/>
      <Card name="Jyothi Rani" age={32} image="https://i.pinimg.com/236x/bc/e3/c2/bce3c295604c49caf3e7b3a3ee975e5c.jpg"/>
      <Card name="Laxmi Narayana" age={42} image="https://thumbs.dreamstime.com/b/cute-cartoon-cow-logo-template-white-background-mascot-animal-character-design-album-scrapbook-greeting-card-invitation-199083214.jpg"/>
      <Card name="Sri Vardhan" age={20} image="https://img.magnific.com/free-vector/cute-boy-with-thumbs-up-cartoon-vector-icon-illustration-people-holiday-icon-isolated-flat-vector_138676-14665.jpg?semt=ais_hybrid&w=740&q=80"/>
      <Card name="Laxmi Narayana" age={42} image="https://thumbs.dreamstime.com/b/cute-cartoon-cow-logo-template-white-background-mascot-animal-character-design-album-scrapbook-greeting-card-invitation-199083214.jpg"/>
      <Card name="Sri Vardhan" age={20} image="https://img.magnific.com/free-vector/cute-boy-with-thumbs-up-cartoon-vector-icon-illustration-people-holiday-icon-isolated-flat-vector_138676-14665.jpg?semt=ais_hybrid&w=740&q=80"/>
      <Card name="Nithya Sri" age={18} image="https://i.pinimg.com/736x/3b/92/35/3b9235b902cab472f8a8137debb5a27e.jpg"/>
      <Card name="Jyothi Rani" age={32} image="https://i.pinimg.com/236x/bc/e3/c2/bce3c295604c49caf3e7b3a3ee975e5c.jpg"/>
      <Card name="Laxmi Narayana" age={42} image="https://thumbs.dreamstime.com/b/cute-cartoon-cow-logo-template-white-background-mascot-animal-character-design-album-scrapbook-greeting-card-invitation-199083214.jpg"/>

    </div>
    </div>
   
  )
}
export default App;