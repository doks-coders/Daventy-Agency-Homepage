import Head from 'next/head'
const Meta = ({title,keywords,description})=>{
return (
   <Head>
    <meta
    name="viewport"
    content="width=device-width,initial-scale=1"
    />
    <meta name="google-site-verification" content="fKHbDkHTan3C7mVkSWvmieWRC6dlk3VaCe28E2m0RkI" />
    <meta
    name="keywords"
    content={keywords}
    />
    <meta
    name="description"
    content={description}
    />
      <meta
    charSet='utf-8'
    />
    <link rel="icon" href='./favicon.ico' />
    <title>{title}</title>
    
   </Head>
)
}


Meta.defaultProps = {
    title:'Web Dev',
    keywords:'web development, programming',
    description:'Get the latest news in web dev'
}

export default Meta