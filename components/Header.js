import { router } from "../scripts/router.js"
import { navigationRoutes } from "../scripts/routes.js"

export const renderHeader = () => {
  // Renderizar dinamicamente os links do menu
  //   const navLinks = navigationRoutes
  //     .map((route) => {
  //       return `<a href="#${route.path}">${route.name}</a>`
  //     })
  //     .join(' ')

  const header = document.querySelector('#header')

  header.innerHTML = `
        <div>
            <h1> Valorant info</h1>

            <nav id="navigation">
                <ul class="navigation-header">
                    <li></li>
                    <li><a href="#${navigationRoutes[0].path}">Sobre o Jogo</a></li>
                    <li id="maps-li"></li>
                </ul>
            </nav>

        </div>

    `

  const a = document.createElement('a')
  const li = document.querySelector('li')
  a.text = 'Agentes'
  const route = navigationRoutes[1];
  a.href = `#${route.path}`

  li.appendChild(a)

  a.addEventListener('click', () => {
    router()
  })
  
   //Parte dos mapas
 const aMaps = document.createElement('a')
 const liMaps = document.querySelector('#maps-li')
 aMaps.text = 'Mapas'
 const routeMaps = navigationRoutes[2];
 aMaps.href = `#${routeMaps.path}`

 liMaps.appendChild(aMaps)

 aMaps.addEventListener('click', () => {
   router()
 })
 //ate aqui é mapa Header.js
}

