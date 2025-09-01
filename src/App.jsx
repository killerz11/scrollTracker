import ScrollTracker from './components/scrollTracker';
import './App.css';

function App() {
    const paragraphs = Array.from({ length: 20 }, (_, i) => (
        <p key={i} className="paragraph">
            Lorem ipsum Praesent varius finibus erat, sit amet condimentum libero faucibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet id enim eget aliquet. Integer porta ut mauris ac pharetra. Proin gravida lectus at lectus luctus iaculis. Nullam quis lectus libero. Donec porttitor eget turpis quis bibendum. Suspendisse potenti. Sed non blandit arcu. Nullam vel porta lectus.

            Mauris semper neque quis lacinia volutpat. Aenean vestibulum diam ex, sit amet posuere dolor luctus non. Ut consectetur felis blandit ipsum convallis, non lobortis justo facilisis. Ut vitae velit pulvinar, pharetra libero semper, dignissim urna. Nullam quam quam, viverra eget feugiat a, interdum et erat. Morbi fringilla, eros et consequat iaculis, ligula nunc hendrerit neque, ac tincidunt massa sem vitae tortor. Nunc volutpat massa at dapibus pulvinar. Etiam risus sem, dignissim vel blandit eget, maximus lacinia purus.

            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse luctus enim a dui rutrum luctus. Proin quam ante, facilisis lacinia vulputate in, efficitur eu ex. Sed tincidunt vehicula tortor eu dictum. Donec velit turpis, iaculis ut dapibus at, mattis ut sapien. Aenean vel sapien nunc. Duis vehicula risus eu mollis luctus. Quisque consequat nibh nec euismod elementum. Pellentesque ut viverra risus, sed viverra sapien. Nullam at purus convallis, pulvinar erat sit amet, fermentum arcu. Aliquam non orci condimentum, dictum purus sed, tincidunt nunc.

            Aenean vulputate enim lectus, quis congue turpis dictum nec. Vestibulum rhoncus bibendum accumsan. Praesent in magna ante. Sed lacinia tellus tellus, blandit varius mauris commodo in. Praesent quis tellus cursus risus placerat consectetur id sed massa. Morbi euismod accumsan ex a luctus. Suspendisse elementum, arcu vel viverra mattis, est nulla scelerisque dolor, non sodales tellus est non ante. Nam volutpat viverra lorem vel dignissim. Quisque eu feugiat dolor. Donec sodales metus in eros luctus dictum. Proin tempor id est et porttitor.

            Sed mollis mi sit amet justo ornare egestas. Praesent dignissim consectetur nibh eget accumsan. Sed viverra sem ac eleifend aliquet. Sed massa dui, luctus ac orci id, auctor facilisis metus. Proin accumsan mattis nisl, nec commodo tortor eleifend quis. Aliquam sodales mauris vel eleifend vehicula. Maecenas in lobortis quam, sed mollis diam. Maecenas mi mi, tempor efficitur risus in, semper molestie leo.

            Integer euismod pellentesque tortor a aliquet. Cras vitae ligula vulputate, mattis leo vitae, mattis dui. Aenean arcu ex, laoreet sed felis sit amet, tincidunt elementum mi. Quisque lacus velit, consequat sed volutpat eu, auctor sed neque. Sed sit amet rutrum nibh, eu laoreet felis. Fusce sagittis sodales erat non mollis. Phasellus tincidunt metus mi, pulvinar tincidunt velit imperdiet quis.

            Nam convallis, tortor malesuada faucibus rhoncus, lorem lectus varius eros, et laoreet justo nunc id tortor. Etiam id velit vel massa cursus tincidunt viverra eu nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla placerat lorem. Donec hendrerit a nisl nec faucibus. Sed felis ipsum, semper quis ornare ut, blandit quis mi. In hac habitasse platea dictumst. Sed nec ante auctor, iaculis dui id, imperdiet arcu. Duis eget fringilla mauris. Nunc consequat pharetra augue non sodales. Aenean eu imperdiet magna, in condimentum leo. Donec ac scelerisque ligula. Morbi eget purus mauris.

            Nulla sem erat, volutpat eget imperdiet a, euismod ut ligula. Aliquam vitae eleifend erat. Sed in odio non quam lacinia maximus. Praesent pretium sed odio quis pretium. Pellentesque finibus maximus metus et pretium. Donec ac ipsum elementum, feugiat velit et, feugiat felis. Proin blandit interdum tincidunt. Fusce consequat suscipit dapibus. Nullam malesuada ipsum eget velit viverra, at elementum diam fringilla. Fusce tempus mauris vel magna volutpat, at congue ante commodo. Aliquam blandit lorem vitae magna pellentesque facilisis. Praesent vitae est eu arcu consequat pharetra. Proin in vestibulum tellus, nec ullamcorper turpis.

            Nam iaculis risus vel lorem tempor semper. Nulla at nulla lorem. Proin in metus est. Sed ultrices sed sapien sed porta. Sed nec blandit velit, at rutrum eros. Sed a blandit eros, ac vehicula arcu. Aenean ullamcorper quis metus ut fermentum. Proin nisi tellus, tincidunt vel felis at, blandit fringilla felis. Etiam ut enim euismod, laoreet lectus vitae, egestas ante. Nunc suscipit at mi ullamcorper suscipit. Mauris dolor arcu, egestas et convallis id, rhoncus eget justo. Integer nec ligula laoreet arcu accumsan mattis ut a urna. Sed eu est enim.

            Morbi erat ex, lacinia nec efficitur eget, sagittis ut orci. Etiam in dolor placerat, pharetra ligula et, bibendum neque. Vestibulum vitae congue lectus, sed ultricies augue. Nam iaculis elit nec velit luctus, vitae rutrum nunc imperdiet. Nunc vel turpis sit amet lectus pellentesque tincidunt. Proin commodo tincidunt enim, at sodales mi dictum ac. Maecenas molestie, metus quis malesuada dictum, leo erat egestas lacus, sit amet tristique urna magna a diam. Donec ultricies dui sit amet mi ornare egestas. Phasellus ultricies lectus non interdum pellentesque. Cras nisi tellus, feugiat sed enim quis, tristique interdum lacus. Sed vel pharetra arcu, ac fermentum neque. Morbi mollis sollicitudin varius. Ut sit amet vulputate velit.
        </p>
    ));

    return (
        <div className="App">
            <ScrollTracker />
            <div style={{ padding: '20px', margin: '30px' }}>
                <h1>Scroll Position Tracker Demo</h1>
                <p>Scroll down and watch the position values change.</p>
                <p>Refresh the page to see your position restored!</p>
                {paragraphs}
            </div>
        </div>
    );
}

export default App;