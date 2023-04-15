import Comment from "../comment/Comment"
import "../../assets/styles/discussion.css"
const Discussion = () => {
  return (
    <main className="discussion">
        <section><Comment/></section>
        <section>full comment</section>
        <section>add new comment</section>
    </main>
  )
}

export default Discussion