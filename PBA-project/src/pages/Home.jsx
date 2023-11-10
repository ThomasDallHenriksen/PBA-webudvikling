import '../assets/global/breakpoints.scss'
import '../assets/main/font.scss'

const Home = () => {
    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    );
}

export default Home;
/* <style lang="scss" scoped>
.home {
    background-color: red;

        @include media("xs") {
            background-color: var(--color-skyblue);
        }   

        @include media("sm") {
            background-color: var(--color-black);
        }   
}
</style> */