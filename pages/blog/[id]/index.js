import { useRouter } from 'next/router'
import { server } from '../../../config'
import BlogDetails from '../../../components/Blog/BlogDetails'
import fetchId from '../../../MongoScripts/fetchId'
import totalNumbers from '../../../MongoScripts/totalNumbers'
import fetchAll from '../../../MongoScripts/fetchAll'
import { formatHeadingLink } from '../../../config'
import Layout from '../../../components/Layout/Layout'

import Meta from '../../../components/Meta'


const article = ({ article, totalNumber, allrecent, description }) => {

    const router = useRouter()
    const { id } = router.query



    return <>
        <Meta
            title={JSON.parse(article).heading}
            keywords={JSON.parse(article).tags.join(', ')}
            description={description}
        />
<Layout>
<BlogDetails recentItems={JSON.parse(allrecent)} totalNumber={JSON.parse(totalNumber)} post={JSON.parse(article)} />
   
</Layout>
    </>
}






export const getStaticProps = async (context) => {
    let allrecent = []
    let article = []
    let totalNumber = []
    try {
        const res = await fetchId({ id: context.params.id })
        const res1 = await totalNumbers()
        const res2 = await fetchAll()
        let result = await res
        let result1 = await res1
        let result3 = await res2

        result.date = convertToDate(result.created)

       

        result3.sort((a, b) => {
            let Aprop = new Date(a.created)
            Aprop = Aprop.getTime()

            let Bprop = new Date(b.created)
            Bprop = Bprop.getTime()

            if (Aprop < Bprop) return 1
            if (Aprop > Bprop) return -1
            else return 0
        })

        allrecent = result3.slice(0, 4).map((val) => {
            val.date = convertToDate(val.created)
            console.log(convertToDate(val.created))
            return (val)
        })
        
        allrecent = JSON.stringify(allrecent)



        article = JSON.stringify(result)
        totalNumber = JSON.stringify(result1)
    } catch (err) {
        allrecent = JSON.stringify([])
        article = JSON.stringify([])
        totalNumber = JSON.stringify([])

    }

    let description = JSON.parse(article).message.map(val => {
        return val.value
    })

    description = description.join(' ')



    return {
        props: {
            article,
            totalNumber,
            allrecent,
            description
        }
    }
}


export const getStaticPaths = async () => {
    const res = await fetchAll()
    const articles = await res

    //paths:{params:{id:'1',id:'2'}} recreate this
    const ids = articles.map(article => formatHeadingLink(article.heading) )
    const paths = ids.map(id => ({ params: { id: id.toString() } }) )
    console.log(paths)

  

    return {
        paths,
        fallback: false
    }
}

export default article


let convertToDate = (val) => {
    let d = new Date(val)
    let string = d.toString()
    let stringArray = string.split(' ').slice(1, -6)
    let newString = stringArray.join(' ')
    return newString
}




//serve -s out -p 8000
