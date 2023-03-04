import { Main, Img, PageTitle, PageSubtitle, Note, NoteText,  } from "./styled";
import aboutBg from '../../images/aboutBg.jpg'
import note from '../../images/note.png'

export const AboutPage = () => {
    
    window.scrollTo(0, 0);

    return (
            <Main>
                <Img
                style={{ backgroundImage: `url(${aboutBg})` }}
                >
                    <PageTitle>З нами смакує добре</PageTitle>
                </Img>
                <PageSubtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem amet adipisci officiis deserunt laboriosam culpa esse illum ex autem maiores, voluptatum modi molestias ipsum perferendis tempora animi illo. Laudantium minima labore modi ab deleniti vitae cupiditate repellendus, fugit voluptas nihil nobis quos beatae. Possimus commodi accusamus maxime, quasi dicta debitis? Atque, fugit eum illo porro sunt numquam soluta minima assumenda voluptatum adipisci, excepturi maxime est! Maiores quisquam animi aperiam odit eveniet. Autem dolores odit quisquam. Necessitatibus hic eos neque, temporibus aspernatur vero repellendus quia pariatur voluptatibus adipisci quisquam laborum rem aut dignissimos ea earum cumque iste illo eveniet maxime laudantium tempore exercitationem, ducimus quasi. Soluta quidem consectetur dignissimos laborum veniam eaque officia illum praesentium earum! Asperiores ex dolor ut.</PageSubtitle>
                <Note
                style={{ backgroundImage: `url(${note})` }}
                >
                    <NoteText>
                        Турпал Маджахед Шахідович<br />
                        +380 066 980<br/>
                        вул.Чеченських Чіченців 24А<br />
                        ModjachedShadiow@gmail.com<br />
                    </NoteText>
                </Note>
        </Main>    
);
};