import React from 'react'

type Props = {}

const post = (props: Props) => {
  return (
    <div>post</div>
  )
}
export const getServersideProps = async (pageContext: { query: { slug: any } }) => {
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug)


}
export default post