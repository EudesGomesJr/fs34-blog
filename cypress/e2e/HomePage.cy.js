function tagsMock () {
  return [
    {
      id: 1,
      name: "Phython"
    },
    {
      id: 2,
      name: "C#"
    },
  ]
}

function postsMock () {
  return [
    {
      id: 1,
      user_id: 2,
      tag_id: [1,2],
      title: "Aprenda a centralizar uma nova div",
      slug: "Aprenda-a-centralizar-uma-nova-div",
      content: "Centralizar as coisas é um dos aspectos mais difíceis do CSS. Os próprios métodos, geralmente, não são difíceis de entender. De fato, tem mais a ver com haver muitas formas diferentes de centralizar as coisas. O método que você usa pode variar dependendo do elemento HTML que você está tentando centralizar ou se você está tentando centralizar na horizontal ou na vertical. Neste tutorial, examinaremos como centralizar elementos diferentes na horizontal, na vertical, e tanto de uma forma como de outra.",
      image_path: "/public/profile.avif",
      date: "2024-10-20"
    },
    {      
      id: 2,
      user_id: 1,
      tag_id: [2],
      title: "Como fazer uma nova lista com CSS Grid",
      slug: "Como-fazer-uma-nova-lista-com-CSS-Grid",
      content: "Imagine que você está montando um quebra-cabeça. Você tem todas as peças em mãos, e cada peça representa um elemento da sua página da web. No entanto, você percebe que, ao tentar encaixá-las, algumas não se encaixam corretamente, ficando uma peça por cima da outra, já outras simplesmente desaparecem quando você tenta posicioná-las. Isso é algo com o qual pessoas que desenvolvem páginas na web podem se identificar. O problema prático e específico é o seguinte: ao criar layouts complexos e responsivos para uma página da web, muitas vezes é desafiador fazer com que todos os elementos se encaixem perfeitamente. Isso não apenas prejudica a estética do site, mas também a usabilidade, o que pode frustrar pessoas usuárias e afastá-las. As soluções para esse quebra-cabeça digital podem ser várias, entretanto, a mais recomendada para layouts complexos é o CSS Grid. O CSS Grid é como o tabuleiro perfeito para montar esse quebra-cabeça. Ele permite que você defina com precisão onde cada elemento deve estar em um layout, além de oferecer soluções para organizar grupos de elementos de forma responsiva, permitindo que você construa um layout que se adapte perfeitamente a diferentes tamanhos de tela e dispositivos.",
      image_path: "/public/profile.avif",
      date: "2024-10-25"
    }
  ]
}

describe('Home page', () => {

  beforeEach(() => {
    cy.intercept('/tags',tagsMock());
    cy.intercept('/posts',postsMock());
    cy.visit('http://localhost:5173/');
  })

  it('Mudando corres para o dark theme', () => {
    localStorage.clear()
    
    cy.get('#fa-moon')
    .should('have.length', 1)
    .click();

    cy.get('#fa-moon')
    .should('have.length', 1)
    .click();

    cy.get('#fa-sun')
    .should('have.length',1)
    .click()
  })

  it('Verificando lista de posts', () => {
    // let postTitleMock = [
    //   "Aprenda a centralizar uma div",
    //   "Como fazer uma lista com CSS Grid",
    //   "O que são poemas",
    //   "Como fazer um slideshow com JavaScript",
    //   "Como usar SVG com CSS",
    //   "Como fazer um chat com WebSocket",
    //   "Como fazer um CRUD com PHP",
    //   "Como fazer um gerador de PDF com PHP"
    // ]

    cy.get('[data-cy="post-title"]')
    .should('have.length',2)
    .each((item, index) => {
      // console.log(index);
      cy.wrap(item).should('have.text', postsMock()[index].title)
    });
  })

  it('Verificando lista de tags', () => {
    const staticResponse = {
      id:1,
      name: "Ruby"
    }

    cy.get('[data-cy="tag-name"]')
    .should('have.length',2)
    .each((item, index) => {
    cy.wrap(item).should('have.text', tagsMock()[index].name)
    });
  })

  // it('Verificando imagens', () => {

  //   cy.get('.vc_icon_element-inner')
  //   .invoke('height').should('be.greaterThan', 47).and('be.lessThan',50)
  // })

})