import React from "react";
import { useState } from "react";
function Corps(){


let [info,setinfo]= useState([
{
 id:0,
 profile:<img src="meuble.jpg" className="photo_profile" alt="" />,
 detail_prof1:"Jane Smith",
 detail_prof2:"15 min",
 logo_terre:<img src="terre.png" className="logo annimation_logo" alt="" />,
 logo_tpoints: <div className="options">...</div>,
 texte:"hey friends i have some thlling news to share with all of you i'm absolutely to embark on a new adventure that's just around.",
 
 like:<img src="like.png" className="logo annimation_logo action_aimer" alt="" />,
 you :<div className="likeaction_aimer">you and </div> ,
 coeur:<img src="coeur.png" className="logo annimation_logo" alt="" />,
 autre:'1 other',
 cadre_comm:<input type="text" className="case_commantaire"/>
},
{
  id:1,
  profile:<img src="meuble.jpg" className="photo_profile" alt="" />,
  detail_prof1:"Jane Smith",
  detail_prof2:"15 min",
  logo_terre:<img src="terre.png" className="logo annimation_logo" alt="" />,
  logo_tpoints: <div className="options">...</div>,
  texte:"hey friends i have some thlling news to share with all of you i'm absolutely to embark on a new adventure that's just around.",
  
  like:<img src="like.png" className="logo annimation_logo action_aimer" alt="" />,
  you :<div className="likeaction_aimer">you and </div> ,
  coeur:<img src="coeur.png" className="logo annimation_logo" alt="" />,
  autre:'1 other',
  cadre_comm:<input type="text" className="case_commantaire"/>
 }

])

let actionAimer=(id)=>{
  let like =document.querySelector('.action_aimer')
  let you= document.querySelector('.likeaction_aimer')
  like.classList.toggle('action_aimer2')
  you.classList.toggle('action_aimer2')
} 


let actionComment=(id)=>{

let comment =document.querySelector('.case_commantaire')
let envoyer =document.querySelector('.envoyerC')
comment.classList.toggle('commente')
envoyer.classList.toggle('commente')
}

let envoyer=()=>{

  let comment =document.querySelector('.case_commantaire')
  let compte = document.querySelector('.compteur_com')
  let reel= parseInt(compte.innerHTML)
  if (comment.value=="") {
    alert("ok")
   }  
  else{
    reel +=1;
    compte.innerHTML=reel

  } 
}

let btnposition=()=>{
  
 let cadre= document.querySelector(".annimation_boites")
 let cadre1= document.querySelector(".storie")
 let cadre2= document.querySelector(".annimation_boites2")
 cadre.classList.toggle("annimation_boites0")
 cadre1.classList.toggle("annimation_boites0")
 cadre2.classList.toggle("annimation_boites01")
}






  return(
    <> 
    <button onClick={btnposition} className="btnposition"><img className="logoanime" src="boutonanime.png" alt="" /></button>
    <div className="accueil">
    
    
         <div className="boites">
                <div className="boite_gauche">
                   <div className="ligne">
                    <div className="facebook">facebook</div>
                    <div className="options ">...</div>
                    </div>
                   <div className="lignes" >
                   <img src="friend.png" className="logo annimation_logo" alt="" />
                   <div className="menu_gauche annimation_texte">Friends</div>     
                    </div>
                   <div className="lignes" >
                   <img src="market.png" className="logo annimation_logo" alt="" />
                    <div className="menu_gauche annimation_texte">Marketplace</div>
                    </div> 
                   <div className="lignes">
                   <img src="groupes.png" className="logo annimation_logo" alt="" />
                     <div className="menu_gauche annimation_texte">Groups</div>
                    </div>
                   <div className="lignes">
                   <img src="watch.png" className="logo annimation_logo" alt="" />
                   <div className="menu_gauche annimation_texte"> Watch </div>
                    </div>
                   <div className="lignes">
                   <div className="fleche"> <img src="flecheb.png" className="logo annimation_logo" alt="" />  </div>
                    <div className="menu_gauche annimation_texte">See more</div>
                    </div>

                </div>

                <div className="boite_gauche annimation_boites">
                  <div>Gaming</div>
                  
                  <div className="gaming_gauches">
                    <img src="chien.jpg" className="jeux" alt="" />
                    <div className="jeu_detail">
                      <div className="theme ">dog racing</div>
                      <div >205 follower</div>
                    </div>
                    <div className="jeu_detail">
                      <div className="themes">follow</div>
                      <div>125 watching</div>
                    </div>
                </div>

                <div className="gaming_gauches">
                    <img src="chien.jpg" className="jeux" alt="" />
                    <div className="jeu_detail">
                      <div className="theme">dog racing</div>
                      <div>205 follower</div>
                    </div>
                    <div className="jeu_detail">
                      <div className="themes">follow</div>
                      <div>125 watching</div>
                    </div>
                </div>


                <div className="lignes">
                   <div className="fleche"> <img src="flecheb.png" className="logo annimation_logo" alt="" /> </div>
                    <div className="menu_gauche annimation_texte">See more</div>
                    </div>
         </div>  
   </div>
   
   <div className="boites">
   
   <input type="file" className="ajouter_file" />

           <div className="storie">
           
            <div className="cadre_image1 ajouter_storie">
            
           <button type="file" className="ajouter">+</button>
           
           </div>
            <img src="chien.jpg" alt=""  className="image_produire storie_partage"/>
            <img src="manequin.jpg" alt=""  className="image_produire storie_partage"/>
            <img src="tenu.webp" alt=""  className="image_produire storie_partage"/>
            <img src="residences.jpg" alt=""  className="image_produire storie_partage"/>
            <div className="fleche"> <img src="fleched.png" className="logo annimation_logo" alt="" /> </div>
           </div>

           <div className="actualité">
                      
               
                <div className="cadre_reaction">
                    <div >
                    {info.map(elt=>{
                    return   <div className="actu_cadre"  key={elt.id} >
                   
                <div className="profiles">
                  <div>{elt.profile}</div>
                  <div className="profile_detail">
                    <div>
                    <div  className="nom_profile annimation_texte">
                      {elt.detail_prof1}
                    </div>
                    <div className="temps_profile">
                    {elt.detail_prof2}{elt.logo_terre}
                    </div>
                    </div>
                    <div>
                    {elt.logo_tpoints}
                    </div>
                  </div>           
                </div>

                    <div className="satus">{elt.texte}</div>                    
                    <div className="emojie">
                            <div className="logo_emojie">
                            <div>{elt.like}</div>
                            <div>{elt.coeur}</div>
                            <div>{elt.you} </div>
                            <div>{elt.autre}</div>
                            </div>
                            <div> <span className="compteur_com">0</span> commentaire</div>
                    </div>

                    <div className="reactions">
                      <button onClick={()=>{actionAimer(elt.id)}} className="like bouttons annimation_texte"> <img src="like.png" className="logo annimation_logo" alt="" /> Like</button>                     
                      <button onClick={()=>{actionComment(elt.id)}}  className="bouttons annimation_texte"><img src="commentaire.png" className="logo annimation_logo" alt="" /> Comment</button>
                      <div className="bouttons annimation_texte"><img src="share.png" className="logo annimation_logo  " alt="" /> Share</div>
                    </div>
                    <div>
                      {elt.cadre_comm}
                      <button onClick={envoyer} className="envoyerC">envoyer</button>
                    </div>
             </div>
  
                  })}
                </div>
              </div>

           </div>
  </div>








   <div className="boites">

          <div className="boite_droit">
           <div className="btn_droit">
                   <div className="espace"> <img src="application.png" className="logo annimation_logo" alt="" /> </div>
                   <div className="espace"> <img src="messanger.png" className="logo annimation_logo" alt="" /> </div>
                   <div className="espace"> <img src="notification.png" className="logo annimation_logo" alt="" /> </div>
                   <img src="meuble.jpg" className="photo_profile" alt="" />
           </div>

           <div className="page">
                  <div className="your_page annimation_texte">your page</div>
                  <div className="profiles">
                  <img src="figma.png" className="photo_profile" alt="" />
                  <div className="profile_detail2">
                    <div>
                    <div className="nom_profile annimation_texte">
                      Figma
                    </div>
                    <div className="temps_profile figma annimation_texte">
                      @figma
                    </div>
                    </div>

                    <div>
                    <img src="hautparleur.png" className="logo annimation_logo" alt="" />
                    </div>

                  </div>
                  </div>
          </div>

           <div className="cardre_birth">
              <div className="birth"> birthday</div>
              <img src="residences.jpg" className="img_birth" alt="" />
              <div className="lignes">
                   <div>
                    clara et 2 other
                    have birthday
                   </div>
                   <img src="meuble.jpg" className="photo_profile" alt="" />
                   <img src="meuble.jpg" className="photo_profile" alt="" />
                   <img src="meuble.jpg" className="photo_profile" alt="" />
                   <div>

                   </div>
              </div>

           </div>

           <div className="contact_birth">
               <div className="contacts annimation_texte">
                Contact
               </div>

               <div>
               <img src="videologo.png" className="logo espaces annimation_logo" alt="" />
               <img src="recherche.png" className="logo espaces annimation_logo" alt="" />
               <img src="paramettre.png" className="logo espaces annimation_logo" alt="" />
               
           </div>

           </div>
           <div className="contact_profile annimation_boites2">
           <div className="lignes">
           <img src="meuble.jpg" className="photo_profile" alt="" />
           <div className="espaces" >sarha kouassi</div>
           </div>
           <div className="lignes">
           <img src="meuble.jpg" className="photo_profile" alt="" />
           <div className="espaces" >sarha kouassi</div>
           </div>
           <div className="lignes">
           <img src="meuble.jpg" className="photo_profile" alt="" />
           <div className="espaces" >sarha kouassi</div>
           </div>
           <div className="lignes">
           <img src="meuble.jpg" className="photo_profile" alt="" />
           <div className="espaces" >sarha kouassi</div>
           </div>
           <div className="lignes">
           <img src="meuble.jpg" className="photo_profile" alt="" />
           <div className="espaces" >sarha kouassi</div>
           </div>
           </div>
           
           
          
          
          </div> 
         
   </div>

   


   


   </div>
    </>
  )

}
export default Corps;