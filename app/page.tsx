import Image from "next/image";

import stars from "@/public/img/Vector.png"
import Link from "next/link";
import foto1 from "@/public/img/foto1.png"
import foto2 from "@/public/img/foto2.png"

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-linear-to-t from-purple-950 to-gray-900 font-sans text-white">
     <header className="flex flex-col items-center gap-3 md:flex-row md:items-stretch md:gap-0 item-center justify-between p-4 md:p-8 border-b-4 fixed w-full bg-black z-50">
      <h1 className="font-mono text-xl md:text-2xl">Expandir</h1>
      <nav> 

        <ul className="flex gap-5 md:gap-10 font-mono text-sm md:text-base">
          <li>
            <Link href="#inicio" className="hover:underline">Início</Link>
          </li>
          <li>
            <Link href="#sobre" className="hover:underline">Sobre Nós</Link>
          </li>
          <li>
            <Link href="#cursos1" className="hover:underline">Cursos</Link>
          </li>
        </ul>
      </nav>
     </header>


     <main id="inicio" className="p-6 px-6 md:px-20 mt-32 md:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-40 py-16 md:py-40">

      <section className="flex flex-col gap-10 h-auto md:h-100">
         <h1 className="font-mono text-4xl md:text-6xl">Expanda seu mundo. Aprenda de graça !</h1>
         
         <h2 className="text-xl md:text-2xl font-inter font-extralight">
          Os melhores cursos online e gratuitos para você turbinar seu currículo, descobrir novas profissões e mandar bem no futuro.
         </h2>

     <Link href={'#cursos2'} className=" w-60 text-center m-auto bg-linear-to-r from-pink-500 to-purple-800 py-2 font-inter font-bold">
         Ver cursos
     </Link>
   
      </section>
      <section className=" flex- flex-col py-8 relative rounded-full  ">
        <div className="absolute right-0 top-1 ">

        <Image src={stars} alt='estrelas'/>
        </div>
       <Image src={foto1} alt="mulher com explosao de ideias"/>

      
      </section>
      </div>
      

      <section id="sobre">
       <div className="grid grid-cols-1 lg:grid-cols-2 py-16 md:py-40 overflow-hidden gap-10 ">
<section className=" flex- flex-col py-8 relative lg:rounded-full rounded-t-full md:rounded-t-full lg:bg-black bg-purple-950 lg:h-60 h-50 overflow-hidden md:overflow-visible">
        <div className="absolute  lg:top-[-60] md:bottom-[-2] md:pl-30 ">

  
       <Image src={foto2} alt="jovem com notbook"/>
        </div>

      
      </section>
      <section className="flex flex-col gap-10 h-auto md:h-100">
         <h2 className="font-mono text-3xl md:text-4xl">Sobre a Expandir...</h2>
         
         <h3 className="text-lg md:text-2xl font-inter font-extralight">
          O mundo está cheio de oportunidades, e a gente te ajuda a encontrar as melhores. A Expandir é uma plataforma feita para conectar adolescentes a cursos 100% gratuitos e de qualidade. Queremos ser a ponte entre o seu talento e o seu futuro, reunindo em um só lugar as melhores capacitações da internet para você começar a mudar sua realidade hoje mesmo.
         </h3>

     <Link href={'#cursos3'} className=" w-60 text-center m-auto bg-linear-to-r from-pink-500 to-purple-800 py-2 font-inter font-bold">
         Ver cursos
     </Link>
        
      </section>
      
      </div>
      </section>
      
    
      <section id="cursos1">
         <h2 className="font-mono text-center text-xl md:text-2xl py-10 text-emerald-400 mt-20 md:mt-40">Não espere o Ensino Médio acabar para começar a construir o seu futuro profissional, começe Agora !!</h2>
        <div id="cursos2" className="w-full md:w-100 h-auto rounded-r-3xl text-black bg-linear-9 from-emerald-50 to-purple-400">
          
          <h2 className="font-mono text-2xl md:text-4xl pl-2">
            conectando ...
          </h2>
        </div>

      
        <div id="cursos3" className=" bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-10 gap-6 md:gap-10 text-sm font-inter lowercase h-auto">

         <Link href={'https://portal.ciee.org.br/universo-ciee/74-cursos-gratuitos-do-ciee-para-impulsionar-sua-carreira/'} target="_blank" className="h-auto lg:h-60 shadow-sm shadow-white p-4 text-white bg-linear-30  from-bg-gray-200 to-gray-600">

<p className="font-mono text-xl md:text-2xl pb-2 uppercase">CIEE </p>
<p className="">
Cursos focados em te preparar para o mercado de trabalho e para processos seletivos de Jovem Aprendiz. Eles oferecem trilhas de Informática Prática (Word, Excel e PowerPoint), Matemática Financeira, Redação Prática e postura em entrevistas de emprego.
</p>
</Link>
         <Link href={'https://aprendamais.mec.gov.br/'} target="_blank" className="h-auto lg:h-60 shadow-sm shadow-white p-4 text-white bg-linear-30  from-bg-gray-200 to-gray-600">

<p className="font-mono text-xl md:text-2xl pb-2 uppercase">Aprenda + </p>
<p className="">
A iniciativa nacional do Ministério da Educação hospeda na Plataforma Aprenda Mais do MEC cursos de TI rápidos criados pelos próprios professores dos Institutos Federais do país, todos com emissão instantânea de certificado oficial
</p>
</Link>



<Link href={'https://moodle.ifrs.edu.br/course/index.php'} target="_blank"className="h-auto lg:h-60 shadow-sm shadow-white p-4 text-white bg-linear-30  from-bg-gray-200 to-gray-600">

<p className="font-mono text-xl md:text-2xl  pb-2 uppercase">IFRS Virtual</p>
<p>
O IFRS possui uma das maiores e mais completas plataformas de cursos de tecnologia livres do país, com trilhas que vão do básico ao avançado.
</p>
</Link>
<Link href={'https://ufpraberta.ufpr.br/course/index.php?categoryid=13'} target="_blank" className="h-auto lg:h-60 shadow-sm shadow-white p-4 text-white bg-linear-30  from-bg-gray-200 to-gray-600">

<p className="font-mono text-xl md:text-2xl  pb-2 uppercase">UFPR Aberta</p>
<p>
 O portal de cursos online e abertos da Universidade Federal do Paraná foca em microaprendizagens e formações de curta duração no formato MOOC.. Uma excelente oportunidade regional para estudantes do Paraná adicionarem o peso de uma universidade federal ao primeiro currículo.
</p>
</Link>
<Link href={'/'} target="_blank" className="md:col-span-2 h-auto lg:h-60 shadow-sm shadow-white p-4 text-white bg-linear-30  from-red-500 to-purple-400">

<p className="font-mono text-xl md:text-2xl  pb-2 uppercase">O seu currículo do amanhã depende das escolhas que você faz hoje.</p>
<p className="lowercase">
Este é o seu guia definitivo para começar agora, sem gastar nada. A internet está cheia de conteúdos gratuitos e de alto nível. Tudo o que você precisa é dar o primeiro passo hoje, para não olhar para trás amanhã e pensar: Eu já poderia estar trabalhando com isso há muito tempo. A escolha é sua.
</p>
</Link>
        </div>
      </section>

      <section className="h-auto mt-20 md:mt-40 ">
         <h2 className="font-mono text-xl md:text-2xl py-10 ">Se quer aprender, e o certificado não faz diferença nesso momento, vamos ver mais opções...</h2>

<div className="  flex flex-col p-4 md:p-10 gap-6 md:gap-10 text-sm font-inter lowercase h-auto">

         <Link href={'https://www.youtube.com/cursoemvideo'} target="_blank" className="h-auto md:h-60 shadow-sm shadow-white p-4 text-white bg-linear-30  from-blue-500 to-gray-600 border-l-8">

<p className="font-mono text-xl md:text-2xl pb-2 uppercase">Curso em Vídeo (Gustavo Guanabara) </p>
<p className="">
É o canal e plataforma de educação em tecnologia mais amado do Brasil. Os cursos são extremamente didáticos, divertidos e focados em quem está no absoluto zero.

</p>
<ol className="list-disc pl-6">
  <p className="font-mono">
    O que aprender:
  </p>
  <li>
     Lógica de Programação
  </li>
  <li>
  Python
  </li>
  <li>
  HTML5 + CSS3
  </li>
  <li>
JavaScript
  </li>
  <li>
Git/GitHub 
  </li>
  <li>
 Banco de Dados.
  </li>
</ol>
</Link>
     
         <Link href={'https://pt.khanacademy.org/computing/computer-programming'} target="_blank" className="h-auto md:h-60 shadow-sm shadow-white p-4 text-white bg-linear-30  from-emerald-400 to-gray-600 border-l-8">

<p className="font-mono text-xl md:text-2xl pb-2 uppercase"> Khan Academy (Área de Computação) </p>
<p className="">
Muito conhecida pelo reforço escolar, a Khan Academy possui um ambiente de programação interativo excelente para adolescentes. É altamente visual e gamificado.

</p>
<ol className="list-disc pl-6">
  <p className="font-mono">
    O que aprender:
  </p>
  <li>
    Introdução ao HTML/CSS (Criação de páginas web)
  </li>
  <li>
 Introdução ao JS (Desenho e animação) 
  </li>
  <li>
Introdução ao SQL (Bancos de dados).
  </li>

</ol>
</Link>




         <Link href={'https://www.freecodecamp.org/portuguese/learn/learn-python-for-beginners'} target="_blank" className="h-auto md:h-60 shadow-sm shadow-white p-4 text-white bg-linear-30  from-blue-900 to-gray-900 border-l-8">

<p className="font-mono text-xl md:text-2xl pb-2 uppercase">freeCodeCamp (Versão em Português)</p>
<p className="">
Uma plataforma global interativa e sem fins lucrativos. O estudante aprende programando direto...
</p>
<ol className="list-disc pl-6">
  <p className="font-mono">
    O que aprender:
  </p>
  <li>
    Tags HTML5 e Estilização CSS3 (Aprender: Flexbox, CSS Grid, Design Responsivo e Acessibilidade Web)
  </li>
  <li>
    Sintaxe de JavaScript e Python (Aprender: Lógica de Programação, Estruturas de Dados, Algoritmos e Automação de Tarefas)
  </li>
  <li>
    Estruturas de Banco de Dados SQL (Aprender: Criação de Tabelas, Relacionamentos, Comandos SELECT, WHERE e JOINs)
  </li>
</ol>

</Link>

     <Link href={'https://w3schools.com'} target="_blank" className="h-auto shadow-sm shadow-white p-4 text-white bg-linear-30 from-green-600 to-gray-500 border-l-8">
<p className="font-mono text-2xl pb-2 uppercase">W3Schools (Em Português)</p>
<p className="">
O maior site de referência e consulta para programadores do mundo. Possui tutoriais curtos, objetivos e um editor onde o aluno pode alterar o código e ver o resultado na hora,basta se cadastrar,logar e mudar o idioma.
</p>
<ol className="list-disc pl-6">
  <p className="font-mono">
    O que aprender:
  </p>
  <li>
    Tags HTML5 e Estilização CSS3
  </li>
  <li>
    Sintaxe de JavaScript e Python
  </li>
  <li>
    Estruturas de Banco de Dados SQL
  </li>
</ol>
</Link>
        </div>
      </section>

      </main>
      <footer className="text-center bg-black p-4">
        <p className="font-mono"><span className="text-emerald-300">Expandir</span> Projeto extencionista ( III ) </p>
        <p>
          <Link href={'https://portifolio2-0-4cej-izgv9182u-lucineiasilvahs-projects.vercel.app/'} target="_blank">
          Lucineia Silva 
          </Link>
          &copy; todos direitos reservados - 2026</p>
      </footer>
    </div>
  );
}