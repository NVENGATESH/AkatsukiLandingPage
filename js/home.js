
let inconatiner=document.getElementsByClassName('incontentconatiner')

let characters = [
  "pain", "daidara", "konan", "itachi", "zetsu",
  "sasori", "hidan", "kakasu", "kisame", "oracimaru"
];


let myStyles = {
 pain:{
    names:"Pain(Nagato)",
    contents: [
      `Tragic Childhood: Orphaned during the Second Shinobi World War after Konoha shinobi killed his parents; awakened the Rinnegan in grief`,
      `Found Family: Rescued by Yahiko and Konan; they dreamed of ending war and trained under Jiraiya.`,
      `Akatsuki's Birth: Founded Akatsuki to promote peace; gained followers and influence across Amegakure.`,
      `Yahiko's Death: Yahiko died in an ambush by Hanzō and Danzō; Nagato was left crippled and emotionally broken.`,
      'Becomes Pain: Adopted the name "Pain," used Yahiko\'s body as the Deva Path, and believed peace could only come through shared suffering.',
      `Rule Over Amegakure: Killed Hanzō, took over , and was worshipped as a god by the people.`
      
    ],
         memberimage:"./images/memberdetailbar/pain/pain.png",
    height:"200px",
    left:"70px",
    top:"30px",
    clipPath:"polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,2.317% 99.829%,2.317% 99.829%,1.96% 99.786%,1.621% 99.663%,1.305% 99.466%,1.017% 99.201%,0.76% 98.876%,0.54% 98.497%,0.361% 98.07%,0.228% 97.604%,0.145% 97.103%,0.116% 96.575%,0.116% 33.208%,0.116% 33.208%,0.128% 32.87%,0.163% 32.54%,0.22% 32.22%,0.298% 31.911%,0.397% 31.616%,0.516% 31.337%,0.653% 31.077%,0.808% 30.838%,0.98% 30.623%,1.169% 30.432%,1.2% 30.404%,4.655% 27.397%,4.655% 27.397%,4.869% 27.187%,5.065% 26.948%,5.242% 26.683%,5.398% 26.393%,5.533% 26.083%,5.646% 25.753%,5.735% 25.407%,5.8% 25.047%,5.84% 24.677%,5.854% 24.298%,5.854% 13.711%,5.854% 13.711%,5.842% 13.357%,5.807% 13.011%,5.75% 12.673%,5.672% 12.347%,5.573% 12.034%,5.454% 11.737%,5.316% 11.457%,5.16% 11.197%,4.987% 10.959%,4.797% 10.745%,4.765% 10.714%,1.101% 7.123%,1.101% 7.123%,0.924% 6.93%,0.762% 6.714%,0.617% 6.478%,0.488% 6.222%,0.378% 5.95%,0.285% 5.663%,0.212% 5.364%,0.159% 5.054%,0.127% 4.736%,0.116% 4.411%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171%",
backround:"/images/memberdetailbar/bg_pain.png"
},
daidara:{
        names:"Deidara",
         contents: [
      `Former Iwagakure shinobi, part of the Explosion Corps with the Explosion Release kekkei genkai.`,
      `Stole a forbidden jutsu to infuse chakra into clay, developing his signature explosive art.`,
      `Became a missing-nin, working as a bomber for insurgents across nations.`,
      `Recruited by Akatsuki after losing a battle to Itachi Uchiha, whom he came to despise.`,
      'Trained to counter genjutsu and developed powerful techniques like C4 to surpass Itachi.',
      
      `Left Iwagakure in ruins by bombing it after his defection.`
      
    ],
             memberimage:"./images/memberdetailbar/daidara/daidaramember.png",
    height:"200px",
    left:"70px",
    top:"30px",
clipPath:"polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,2.317% 99.829%,2.317% 99.829%,1.96% 99.786%,1.621% 99.663%,1.305% 99.466%,1.017% 99.201%,0.76% 98.876%,0.54% 98.497%,0.361% 98.07%,0.228% 97.604%,0.145% 97.103%,0.116% 96.575%,0.116% 41.336%,0.116% 41.336%,0.128% 40.999%,0.162% 40.67%,0.219% 40.35%,0.297% 40.042%,0.396% 39.747%,0.514% 39.469%,0.651% 39.21%,0.805% 38.971%,0.977% 38.755%,1.164% 38.564%,1.195% 38.536%,4.661% 35.503%,4.661% 35.503%,4.874% 35.293%,5.069% 35.054%,5.244% 34.789%,5.4% 34.5%,5.534% 34.189%,5.647% 33.86%,5.736% 33.515%,5.8% 33.156%,5.84% 32.786%,5.854% 32.409%,5.854% 21.609%,5.854% 21.609%,5.843% 21.267%,5.81% 20.931%,5.757% 20.604%,5.683% 20.287%,5.59% 19.982%,5.479% 19.691%,5.349% 19.416%,5.202% 19.16%,5.038% 18.923%,4.859% 18.709%,4.798% 18.644%,1.071% 14.863%,1.071% 14.863%,0.899% 14.67%,0.742% 14.454%,0.601% 14.219%,0.477% 13.966%,0.369% 13.697%,0.28% 13.414%,0.209% 13.118%,0.158% 12.813%,0.126% 12.5%,0.116% 12.181%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171% ",
backround:"/images/memberdetailbar/daidara/daidarabackroundimage.png"


},
konan:{
     names:"Angel(Konan)",
       contents: [
      `Former Iwagakure ninja with the Explosion Release kekkei genkai.`,
      `Stole a forbidden jutsu to infuse chakra into clay, creating explosive art.`,
      `Became a missing-nin and worked as a bomber-for-hire.`,
      `Forced to join Akatsuki after losing to Itachi Uchiha.`,
      'Developed techniques like C4 to surpass Itachi and counter genjutsu.',
      `Partnered with Sasori and carried out missions for Akatsuki`
      
    ],
          memberimage:"./images/memberdetailbar/konana/konanamember.png",
    height:"200px",
    left:"90px",
    top:"8px",
clipPath:"polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,2.317% 99.829%,2.317% 99.829%,1.96% 99.786%,1.621% 99.663%,1.305% 99.466%,1.017% 99.201%,0.76% 98.876%,0.54% 98.497%,0.361% 98.07%,0.228% 97.604%,0.145% 97.103%,0.116% 96.575%,0.116% 49.671%,0.117% 49.566%,0.117% 49.566%,0.134% 49.255%,0.17% 48.95%,0.226% 48.654%,0.3% 48.368%,0.391% 48.094%,0.5% 47.835%,0.625% 47.59%,0.765% 47.364%,0.92% 47.156%,1.09% 46.97%,1.149% 46.913%,4.711% 43.617%,4.711% 43.617%,4.916% 43.406%,5.103% 43.167%,5.272% 42.903%,5.42% 42.617%,5.549% 42.311%,5.656% 41.988%,5.741% 41.65%,5.803% 41.299%,5.841% 40.938%,5.854% 40.569%,5.854% 29.751%,5.854% 29.751%,5.843% 29.413%,5.811% 29.08%,5.758% 28.756%,5.686% 28.441%,5.595% 28.138%,5.485% 27.849%,5.358% 27.576%,5.213% 27.32%,5.053% 27.084%,4.876% 26.87%,4.816% 26.805%,1.055% 22.914%,1.055% 22.914%,0.885% 22.72%,0.731% 22.505%,0.592% 22.271%,0.47% 22.019%,0.365% 21.751%,0.277% 21.47%,0.207% 21.178%,0.157% 20.875%,0.126% 20.565%,0.116% 20.249%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171% ",
backround:"/images/memberdetailbar/bg_pain.png"

},
itachi:{
     names:"Itachi Uchiha",
      contents: [
      `Child Prodigy & Pacifist: Traumatized by war at age 4, Itachi sought peace and became an exceptional ninja early on.`,
      `Academy & Early Growth: Graduated the Academy at 7, awakened Sharingan at 8, and became a Chūnin at 10.`,
      `Anbu & Double Agent: Joined Anbu at 11, promoted to captain at 12; secretly became a double agent to prevent Uchiha clan's coup.`,
      `Shisui’s Death & Mangekyō: Gained Mangekyō Sharingan after Shisui’s suicide; carried the burden of protecting the village.`,
    `Uchiha Massacre: Killed his clan with Tobi (Obito) under Danzō's orders, sparing only Sasuke, whom he manipulated to grow stronger.`,      
      `Joined Akatsuki: Infiltrated Akatsuki as a spy to watch over threats to Konoha; partnered with Kisame and helped recruit members.`
      
    ],
          memberimage:"./images/memberdetailbar/itachi/itachimember.png",
    height:"200px",
    left:"70px",
    top:"8px",
clipPath:"polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,2.317% 99.829%,2.317% 99.829%,1.96% 99.786%,1.621% 99.663%,1.305% 99.466%,1.017% 99.201%,0.76% 98.876%,0.54% 98.497%,0.361% 98.07%,0.228% 97.604%,0.145% 97.103%,0.116% 96.575%,0.116% 59.293%,0.116% 59.293%,0.127% 58.959%,0.161% 58.633%,0.217% 58.316%,0.294% 58.01%,0.391% 57.718%,0.507% 57.442%,0.641% 57.183%,0.793% 56.945%,0.961% 56.729%,1.146% 56.538%,1.177% 56.51%,4.681% 53.372%,4.681% 53.372%,4.891% 53.162%,5.083% 52.923%,5.255% 52.658%,5.408% 52.37%,5.54% 52.062%,5.65% 51.735%,5.738% 51.392%,5.802% 51.037%,5.84% 50.671%,5.854% 50.296%,5.854% 39.251%,5.854% 39.251%,5.842% 38.893%,5.806% 38.542%,5.748% 38.201%,5.668% 37.871%,5.566% 37.555%,5.445% 37.256%,5.304% 36.974%,5.145% 36.713%,4.967% 36.475%,4.773% 36.262%,4.741% 36.23%,1.122% 32.774%,1.122% 32.774%,0.942% 32.582%,0.777% 32.366%,0.628% 32.129%,0.497% 31.872%,0.384% 31.597%,0.289% 31.308%,0.215% 31.006%,0.16% 30.692%,0.127% 30.37%,0.116% 30.042%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171%",
backround:"/images/memberdetailbar/itachi/itachibacroundimage.png"

},
zetsu:{
     names:"Zetsu",
        contents: [
      `Black Zetsu was created by Kaguya Ōtsutsuki to act as her will and ensure her revival after she was sealed by her sons, Hagoromo and Hamura.`,
      `Black Zetsu manipulated Indra (Hagoromo's son) into starting conflict with his brother Asura, setting the stage for centuries of Uchiha vs. Senju rivalry.`,
      `It altered the Sage of Six Paths' stone tablet to mislead the Uchiha clan, falsely presenting the Infinite Tsukuyomi as a path to peace.`,
      `Hid inside Madara’s body, letting him believe Black Zetsu was created from his will, and later helped orchestrate the events leading to Madara's resurrection.`,
    `White Zetsu was a human transformed by the Infinite Tsukuyomi, extracted from the Demonic Statue by Black Zetsu and Madara using Hashirama’s DNA.`,
      `Both Zetsus aided Obito after his injury, helping in his recovery and manipulation, eventually guiding him to become a tool for the Eye of the Moon Plan.`
      
    ],
          memberimage:"./images/memberdetailbar/zetsu/Zetsumember.png",
    height:"200px",
    left:"70px",
    top:"-8px",
clipPath:" polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,2.317% 99.829%,2.317% 99.829%,1.96% 99.786%,1.621% 99.663%,1.305% 99.466%,1.017% 99.201%,0.76% 98.876%,0.54% 98.497%,0.361% 98.07%,0.228% 97.604%,0.145% 97.103%,0.116% 96.575%,0.116% 65.555%,0.116% 65.555%,0.13% 65.183%,0.173% 64.821%,0.242% 64.471%,0.336% 64.137%,0.454% 63.822%,0.596% 63.527%,0.759% 63.257%,0.942% 63.014%,1.144% 62.802%,1.364% 62.622%,1.401% 62.597%,4.433% 60.546%,4.433% 60.546%,4.683% 60.35%,4.913% 60.116%,5.122% 59.847%,5.307% 59.547%,5.468% 59.219%,5.603% 58.866%,5.71% 58.492%,5.789% 58.1%,5.837% 57.693%,5.854% 57.276%,5.854% 47.241%,5.854% 47.241%,5.842% 46.884%,5.806% 46.533%,5.748% 46.192%,5.668% 45.862%,5.566% 45.546%,5.445% 45.246%,5.304% 44.965%,5.145% 44.704%,4.967% 44.466%,4.773% 44.252%,4.741% 44.221%,1.122% 40.765%,1.122% 40.765%,0.942% 40.573%,0.777% 40.357%,0.628% 40.119%,0.497% 39.863%,0.384% 39.588%,0.289% 39.299%,0.215% 38.997%,0.16% 38.683%,0.127% 38.361%,0.116% 38.033%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171%",
backround:"/images/memberdetailbar/zetsu/zetsubaxkroundimage.png"

},
sasori:{
     names:"Sasori",
         contents: [
      `Puppet Prodigy: Sasori, grandson of Chiyo from Sunagakure, was a genius puppeteer known for his deadly creations during the Third Shinobi World War, earning the title "Sasori of the Red Sand.`,
      `Third Kazekage's Killer: He secretly abducted and killed the Third Kazekage, the strongest in Suna’s history, and turned him into a human puppet.`,
      `It altered the Sage of Six Paths' stone tablet to mislead the Uchiha clan, falsely presenting the Infinite Tsukuyomi as a path to peace.`,
      `Joins Akatsuki: After leaving Suna, Sasori joined Akatsuki, continuing his puppet-based killings and eventually turning himself into a puppet to avoid aging.`,
    `Truth Revealed: The truth about the Third Kazekage’s fate came to light when Chiyo encountered Sasori again during the events of Gaara’s capture by Akatsuki`,
      `Both Zetsus aided Obito after his injury, helping in his recovery and manipulation, eventually guiding him to become a tool for the Eye of the Moon Plan.`
      
    ],
     memberimage:"./images/memberdetailbar/sasori/sasorimemebr.png",
    height:"200px",
    left:"70px",
    top:"-26px",
clipPath:" polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,2.317% 99.829%,2.317% 99.829%,1.96% 99.786%,1.621% 99.663%,1.305% 99.466%,1.017% 99.201%,0.76% 98.876%,0.54% 98.497%,0.361% 98.07%,0.228% 97.604%,0.145% 97.103%,0.116% 96.575%,0.116% 74.021%,0.116% 74.021%,0.129% 73.67%,0.166% 73.328%,0.228% 72.997%,0.312% 72.678%,0.418% 72.375%,0.545% 72.091%,0.691% 71.827%,0.857% 71.586%,1.04% 71.37%,1.24% 71.183%,1.273% 71.156%,4.574% 68.529%,4.574% 68.529%,4.801% 68.324%,5.01% 68.086%,5.198% 67.819%,5.365% 67.525%,5.509% 67.207%,5.63% 66.868%,5.726% 66.512%,5.796% 66.14%,5.839% 65.756%,5.854% 65.363%,5.854% 53.563%,5.854% 53.563%,5.84% 53.179%,5.799% 52.805%,5.732% 52.442%,5.641% 52.093%,5.526% 51.76%,5.388% 51.447%,5.229% 51.157%,5.049% 50.891%,4.85% 50.653%,4.632% 50.445%,4.596% 50.414%,1.253% 47.688%,1.253% 47.688%,1.051% 47.501%,0.866% 47.285%,0.698% 47.044%,0.55% 46.779%,0.421% 46.493%,0.314% 46.189%,0.229% 45.869%,0.167% 45.535%,0.129% 45.191%,0.116% 44.839%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171%  ",
backround:"/images/memberdetailbar/sasori/sasoribacround.png"

},
hidan:{
     names:"Hidan",
        contents: [
      `Early Signs of Violence: As a child in Yugakure, Hidan discovered fresh corpses in the Valley of Hell, leading to suspicions that he was involved in a massacre; the incident was later deemed the work of an entire clan.`,
      `Yugakure's Decline and Rebellion: Disillusioned with Yugakure turning into a peaceful tourist spot, Hidan massacred his neighbors, believing shinobi were meant to kill, and left the village.`,
      `Conversion to Jashinism: He joined the Jashin cult, embracing its doctrine of destruction and slaughter, and gained immortality through the faith’s secret techniques.`,
      `Joins Akatsuki: After leaving Suna, Sasori joined Akatsuki, continuing his puppet-based killings and eventually turning himself into a puppet to avoid aging.`,
    `Joining Akatsuki: After his violent acts, Yugakure requested Akatsuki to eliminate him. Instead, after a fight where he impressed the members, especially Kakuzu, he was invited to join Akatsuki and accepted.`,  
      `Akatsuki Activities: Hidan partnered with Kakuzu, continued preaching Jashinism, and was involved in missions including the capture of the Two-Tails and Seven-Tails jinchūriki.`
      
    ],
          memberimage:"./images/memberdetailbar/hidan/hidanmemebr.png",
    height:"200px",
    left:"70px",
    top:"-55px",
clipPath:"polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,2.317% 99.829%,2.317% 99.829%,1.96% 99.786%,1.621% 99.663%,1.305% 99.466%,1.017% 99.201%,0.76% 98.876%,0.54% 98.497%,0.361% 98.07%,0.228% 97.604%,0.145% 97.103%,0.116% 96.575%,0.116% 81.23%,0.116% 81.23%,0.129% 80.869%,0.169% 80.517%,0.234% 80.177%,0.324% 79.85%,0.436% 79.541%,0.57% 79.252%,0.724% 78.984%,0.898% 78.742%,1.091% 78.528%,1.301% 78.344%,1.336% 78.318%,4.505% 75.984%,4.505% 75.984%,4.744% 75.783%,4.963% 75.547%,5.161% 75.279%,5.337% 74.981%,5.489% 74.658%,5.617% 74.313%,5.718% 73.947%,5.793% 73.566%,5.838% 73.171%,5.854% 72.765%,5.854% 60.891%,5.854% 60.891%,5.841% 60.522%,5.803% 60.162%,5.741% 59.811%,5.657% 59.473%,5.55% 59.151%,5.422% 58.845%,5.273% 58.56%,5.105% 58.296%,4.919% 58.058%,4.715% 57.846%,4.681% 57.815%,1.177% 54.677%,1.177% 54.677%,0.987% 54.487%,0.813% 54.271%,0.657% 54.031%,0.519% 53.771%,0.399% 53.492%,0.3% 53.196%,0.22% 52.886%,0.163% 52.564%,0.128% 52.233%,0.116% 51.895%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171% ",
backround:"/images/memberdetailbar/hidan/Hidanbacround.png"

},
kakasu:{
     names:"Kakuzu",
         contents: [
      `Mission Against Hashirama: As an elite ninja of Takigakure, Kakuzu was assigned to assassinate Hashirama Senju, the First Hokage, but failed, earning punishment and disgrace upon returning home.`,
      `Betrayal and Defection: Feeling wronged, Kakuzu escaped imprisonment, killed the village elders, stole their hearts, and fled with forbidden techniques, developing a deep hatred for Takigakure.`,
      `Earth Grudge Fear and Bounty Hunting: Using his stolen technique, Earth Grudge Fear, Kakuzu extended his life by ripping out the hearts of powerful shinobi and survived through black market bounty hunting.`,
      `Joining Akatsuki: After being defeated by Pain, Kakuzu joined Akatsuki. He had multiple partners he eventually killed due to his temper, using their hearts for himself.`,
    `Partnership with Hidan: Kakuzu was eventually paired with Hidan, whose immortality made him the only durable partner Kakuzu couldn’t kill, forming a deadly duo despite their mutual dislike.`,
    
      
      `Akatsuki Activities: Hidan partnered with Kakuzu, continued preaching Jashinism, and was involved in missions including the capture of the Two-Tails and Seven-Tails jinchūriki.`
      
    ],
          memberimage:"./images/memberdetailbar/kakasu/kakasumemebr.png",
    height:"200px",
    left:"70px",
    top:"-55px",
clipPath:"  polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,2.317% 99.829%,2.317% 99.829%,1.96% 99.786%,1.621% 99.663%,1.305% 99.466%,1.017% 99.201%,0.76% 98.876%,0.54% 98.497%,0.361% 98.07%,0.228% 97.604%,0.145% 97.103%,0.116% 96.575%,0.116% 91.429%,0.116% 91.429%,0.129% 91.079%,0.166% 90.737%,0.228% 90.405%,0.312% 90.087%,0.418% 89.784%,0.545% 89.499%,0.691% 89.235%,0.857% 88.994%,1.04% 88.779%,1.24% 88.592%,1.273% 88.565%,4.574% 85.938%,4.574% 85.938%,4.801% 85.732%,5.01% 85.495%,5.198% 85.227%,5.365% 84.933%,5.509% 84.616%,5.63% 84.277%,5.726% 83.92%,5.796% 83.549%,5.839% 83.165%,5.854% 82.772%,5.854% 71.931%,5.854% 71.931%,5.841% 71.568%,5.805% 71.212%,5.745% 70.867%,5.662% 70.533%,5.558% 70.213%,5.433% 69.911%,5.289% 69.627%,5.125% 69.365%,4.944% 69.126%,4.745% 68.914%,4.711% 68.883%,1.149% 65.587%,1.149% 65.587%,0.964% 65.396%,0.795% 65.18%,0.642% 64.941%,0.508% 64.682%,0.391% 64.406%,0.294% 64.113%,0.218% 63.807%,0.162% 63.489%,0.127% 63.163%,0.116% 62.829%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171%",
backround:"/images/memberdetailbar/kakasu/kakasubackroundimg.png"

},
kisame:{
     names:"Kisame",
         contents: [
      `Loyal but Ruthless Shinobi: Kisame served under Fuguki Suikazan of the Seven Ninja Swordsmen of the Mist and killed the Cypher Division to prevent Konoha from extracting information—showing loyalty to his village over comrades.`,
      `Betrayal of Fuguki: After discovering Fuguki was a traitor selling intel to enemy villages, Kisame killed him and took Samehada, beginning his descent into disillusionment and distrust.`,
      `Recruitment by “Madara” (Obito): Kisame was approached by Obito (posing as Madara), who introduced him to the Eye of the Moon Plan; enticed by the idea of a "world without lies", Kisame agreed to join him.`,
      `Joining Akatsuki: After being defeated by Pain, Kakuzu joined Akatsuki. He had multiple partners he eventually killed due to his temper, using their hearts for himself.`,
    `Monster of the Hidden Mist”: Kisame earned his nickname due to his brutality and power. Branded a criminal for attempting to overthrow Kirigakure’s government and assassinating political targets, he became a missing-nin`,
    
      
      `Akatsuki Activities: Hidan partnered with Kakuzu, continued preaching Jashinism, and was involved in missions including the capture of the Two-Tails and Seven-Tails jinchūriki.`
      
    ],
          memberimage:"./images/memberdetailbar/kisame/kisamememebr.png",
    height:"200px",
    left:"70px",
    top:"-95px",
clipPath:"polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.575%,99.884% 96.575%,99.855% 97.103%,99.772% 97.604%,99.639% 98.07%,99.46% 98.497%,99.24% 98.876%,98.983% 99.201%,98.695% 99.466%,98.379% 99.663%,98.04% 99.786%,97.683% 99.829%,1.789% 99.829%,1.789% 99.829%,1.517% 99.796%,1.26% 99.703%,1.02% 99.553%,0.801% 99.352%,0.606% 99.104%,0.439% 98.816%,0.303% 98.492%,0.201% 98.137%,0.138% 97.757%,0.116% 97.356%,0.116% 97.356%,0.125% 97.094%,0.153% 96.838%,0.198% 96.589%,0.26% 96.351%,0.338% 96.123%,0.432% 95.909%,0.54% 95.71%,0.662% 95.527%,0.798% 95.363%,0.945% 95.22%,0.996% 95.178%,4.574% 92.33%,4.574% 92.33%,4.801% 92.125%,5.01% 91.887%,5.198% 91.62%,5.365% 91.326%,5.509% 91.008%,5.63% 90.67%,5.726% 90.313%,5.796% 89.941%,5.839% 89.557%,5.854% 89.164%,5.854% 77.98%,5.854% 77.98%,5.841% 77.608%,5.802% 77.243%,5.739% 76.89%,5.653% 76.549%,5.544% 76.224%,5.413% 75.917%,5.262% 75.63%,5.092% 75.366%,4.902% 75.127%,4.695% 74.916%,4.661% 74.885%,1.195% 71.852%,1.195% 71.852%,1.002% 71.662%,0.826% 71.446%,0.667% 71.206%,0.526% 70.945%,0.405% 70.664%,0.303% 70.366%,0.223% 70.053%,0.164% 69.729%,0.128% 69.394%,0.116% 69.052%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171%",
 backround:"/images/memberdetailbar/kisame/kisamebackroundimg.png"

},
oracimaru:{
     names:"Orochimaru",
         contents: [
      `Prodigy Turned Dark: Once a gifted student of Hiruzen Sarutobi and teammate of Jiraiya and Tsunade, Orochimaru became obsessed with immortality and forbidden knowledge after the loss of his parents.`,
      `Wartime Hero & Sannin: Gained fame during the Second Shinobi World War and was titled one of the "Legendary Sannin" by Hanzō alongside Jiraiya and Tsunade.`,
      `Secret Experiments: While working with Root under Danzō, he began kidnapping and experimenting on shinobi to develop immortality techniques and reproduce powerful abilities like Hashirama’s Wood Release.`,
      `Joining Akatsuki: After being defeated by Pain, Kakuzu joined Akatsuki. He had multiple partners he eventually killed due to his temper, using their hearts for himself.`,
    `Creation of Otogakure: After failing to become Hokage and being discovered by Hiruzen, Orochimaru defected from Konoha, founded Otogakure, and continued his inhumane experiments.`,
      `Akatsuki Membership & Defeat: Joined Akatsuki, partnered with Sasori, and attempted to steal Itachi’s body for the Sharingan but was swiftly defeated and expelled after his failure.`
      
    ],
          memberimage:"./images/memberdetailbar/orachimaru/orachimarumrmber.png",
    height:"200px",
    left:"70px",
    top:"-65px",
clipPath:" polygon( 2.317% 0.171%,97.683% 0.171%,97.683% 0.171%,98.04% 0.214%,98.379% 0.337%,98.695% 0.534%,98.983% 0.799%,99.24% 1.124%,99.46% 1.503%,99.639% 1.93%,99.772% 2.396%,99.855% 2.897%,99.884% 3.425%,99.884% 96.563%,99.884% 96.563%,99.855% 97.092%,99.771% 97.594%,99.637% 98.061%,99.458% 98.488%,99.237% 98.867%,98.979% 99.193%,98.69% 99.457%,98.373% 99.653%,98.033% 99.775%,97.675% 99.816%,8.046% 99.328%,8.046% 99.328%,7.69% 99.283%,7.353% 99.159%,7.038% 98.961%,6.751% 98.696%,6.495% 98.37%,6.276% 97.992%,6.098% 97.566%,5.965% 97.1%,5.882% 96.601%,5.854% 96.074%,5.854% 88.163%,5.854% 88.163%,5.841% 87.796%,5.804% 87.437%,5.742% 87.088%,5.658% 86.752%,5.553% 86.43%,5.426% 86.126%,5.278% 85.841%,5.112% 85.578%,4.927% 85.339%,4.725% 85.127%,4.691% 85.096%,1.167% 81.906%,1.167% 81.906%,0.979% 81.715%,0.807% 81.499%,0.652% 81.26%,0.515% 81%,0.397% 80.722%,0.298% 80.427%,0.219% 80.118%,0.162% 79.798%,0.128% 79.468%,0.116% 79.132%,0.116% 3.425%,0.116% 3.425%,0.145% 2.897%,0.228% 2.396%,0.361% 1.93%,0.54% 1.503%,0.76% 1.124%,1.017% 0.799%,1.305% 0.534%,1.621% 0.337%,1.96% 0.214%,2.317% 0.171% ",
 backround:"/images/memberdetailbar/orachimaru/orachimarubackround.png"


},
}
   
  
let normalmyStyles = {
 pain:{
    height:"80px",
    left:"-5px",
    top:"85px",
   
},
daidara:{
   height:"80px",
    left:"0px",
    top:"90px",

},
konan:{
    height:"80px",
    left:"0px",
    top:"90px",

},
itachi:{
   height:"80px",
    left:"-2px",
    top:"80px",

},
zetsu:{
 height:"80px",
    left:"0px",
    top:"80px",

},
sasori:{
   height:"80px",
    left:"0px",
    top:"80px",

},
hidan:{
   height:"80px",
    left:"-5px",
    top:"70px",

},
kakasu:{
   height:"80px",
    left:"0px",
    top:"60px",

},
kisame:{
    height:"80px",
    left:"0px",
    top:"40px",

},
oracimaru:{
   height:"80px",
    left:"0px",
    top:"35px",

},
}
   
  

let clipPaths; 
 let beforename=['pain']; 
 let i=1;
 let backroundimage=document.getElementById('backroundimagemeercardjsid')
 
  let membername=document.getElementById('membername');
 let memcimgcontaineridimg=  document.querySelector('#memcimgcontainerid img')


let firstItem = document.querySelector('#ulmemberinformation li:nth-child(1)');
let secoundItem = document.querySelector('#ulmemberinformation li:nth-child(2)');
let ThirdItem = document.querySelector('#ulmemberinformation li:nth-child(3)');
let FourItem = document.querySelector('#ulmemberinformation li:nth-child(4)');
let fiveItem = document.querySelector('#ulmemberinformation li:nth-child(5)');
let sixItem = document.querySelector('#ulmemberinformation li:nth-child(6)');






 
   
 
function getidFunction(name) {
 beforename[i++]=name;
  console.log(beforename.length);
  let bbb;
  if(beforename[beforename.length-2]!==beforename[beforename.length-1]){
bbb=beforename[beforename.length-2]
 console.log(bbb+"ji")
  }
let valueofname=beforename[beforename.length-2];




  for(let i of characters){
     let vars= document.getElementById(name);
     let vars1= document.getElementById(bbb);


    //  Clickable event
    if(i===name){

inconatiner[0].style.clipPath =  myStyles[name] .clipPath;
 vars.style.left=myStyles[name] .left
 vars.style.top=myStyles[name] .top
 vars.style.height=myStyles[name] .height
 backroundimage.style.backgroundImage = `url(${myStyles[name] .backround})`;



//  start
// membername.style.opacity = '0';
// membername.innerText = myStyles[name].names;
// membername.style.opacity = '1';
// const title = document.getElementById('membername');


  membername.style.opacity = '0'; 

  setTimeout(() => {
    membername.innerText = myStyles[name].names; // change text
    membername.style.opacity = '1'; // fade in
  }, 300); 


// end



// strat
// memcimgcontaineridimg.style.opacity=0;
// memcimgcontaineridimg.src = myStyles[name].memberimage ;
// memcimgcontaineridimg.style.opacity=1;

const img = memcimgcontaineridimg;
img.style.opacity = '0';

// Step 2: After fade-out completes, change the source
setTimeout(() => {
  img.src = myStyles[name].memberimage;

  // Step 3: Wait until the new image is loaded before fading it in
  img.onload = () => {
    img.style.opacity = '1';
  };
}, 300);

// end




// start

// firstItem.innerText=myStyles[name].contents[0];
// secoundItem.innerText=myStyles[name].contents[1];
// ThirdItem.innerText=myStyles[name].contents[2];
// FourItem.innerText=myStyles[name].contents[3];
// fiveItem.innerText=myStyles[name].contents[4];
// sixItem.innerText=myStyles[name].contents[5];

  const items = [firstItem, secoundItem, ThirdItem, FourItem, fiveItem, sixItem];
  const newContents = myStyles[name].contents;


 items.forEach(item => {
    item.style.opacity = '0';
  });

  // Step 2: Wait for fade-out to complete, then update and fade in
  setTimeout(() => {
    items.forEach((item, index) => {
      item.innerText = newContents[index];
      item.style.opacity = '1'; // Fade back in
    });
  }, 300); 





  // end


 
  }



  
    // non Clickable event
 
 if(beforename.length!==1 &&beforename[beforename.length-2]!==beforename[beforename.length-1] ){
 vars1.style.left=normalmyStyles[bbb].left;
 vars1.style.top=normalmyStyles[bbb].top;
 vars1.style.height=normalmyStyles[bbb].height
 }
}


  }
    


  

let firstItem1 = document.querySelector('#ulmemberinformation1 li:nth-child(1)');
let secoundItem1 = document.querySelector('#ulmemberinformation1 li:nth-child(2)');
let ThirdItem1 = document.querySelector('#ulmemberinformation1 li:nth-child(3)');
let FourItem1 = document.querySelector('#ulmemberinformation1 li:nth-child(4)');
let fiveItem1 = document.querySelector('#ulmemberinformation1 li:nth-child(5)');
let sixItem1 = document.querySelector('#ulmemberinformation1 li:nth-child(6)');
let namesss=document.getElementById('namemeber2')
let backgroundImage1=document.getElementById('memberboxbarsectioin2close')
function changecontentmembarebar(name1) {
  const newContents = myStyles[name1].contents;
  const itemss = [firstItem1, secoundItem1, ThirdItem1, FourItem1, fiveItem1, sixItem1];

  // Update name display
  namesss.innerText = myStyles[name1].names;
   backgroundImage1.style.backgroundImage = `url(${myStyles[name1] .backround})`;

  // Fade out items
  itemss.forEach(item => {
    item.style.opacity = '0';
  });

  // Wait for fade-out to complete, then update and fade in
  setTimeout(() => {
    itemss.forEach((item, index) => {
      item.innerText = newContents[index] || ''; // Default to empty string if content missing
      item.style.opacity = '1'; // Fade back in
    });
  }, 300);
}