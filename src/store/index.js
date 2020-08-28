import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [{
        date: "2020年05月01日 09:00:00",

        articleName: "vue的学习之旅",
        content: "vue好难啊，要学多久才能学完了，我快疯了！！！！啊啊啊！！！",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 1,

      },
      {
        date: "2020年07月20日 10:00:00",

        articleName: "v-model的使用方法",
        content: "双向绑定就很虚浮",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 2,
      },
      {
        date: "2020年07月21日 12:00:00",

        articleName: "学习这件事",
        content: "学习的过程很煎熬，但是解决了问题会很有成就感",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 3,
      },
      {
        date: "2019年12月16日 23:46:54",

        articleName: "雪",
        content: "下雪了呀，雪花还挺好看的",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 4,
      }, {
        date: "2020年08月01日 11:00:00",

        articleName: "1",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 5,
      },
      {
        date: "2020年08月02日 11:00:00",

        articleName: "2",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 6,
      },
      {
        date: "2020年08月03日 11:00:00",

        articleName: "3",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 7,
      },
      {
        date: "2020年08月04日 11:00:00",
        articleName: "4",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 8,
      },
      {
        date: "2020年08月05日 11:00:00",

        articleName: "5",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 9,
      },
      {
        date: "2020年08月06日 11:00:00",

        articleName: "6",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 10,
      },
      {
        date: "2020年08月07日 11:00:00",

        articleName: "7",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 11,
      },
      {
        date: "2020年08月08日 11:00:00",

        articleName: "8",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 12,
      },
      {
        date: "2020年08月09日 11:00:00",

        articleName: "9",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 13,
      },
      {
        date: "2020年08月10日 11:00:00",

        articleName: "10",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 14,
      },
      {
        date: "2020年08月11日 11:00:00",

        articleName: "11",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 15,
      },
      {
        date: "2020年08月12日 11:00:00",

        articleName: "12",
        content: "测试",
        read: 1,
        remark: 0,
        maintain: 0,
        id: 16,
      },
      {
        date: "2008年06月04日 14:28:11",

        articleName: "《心》书评",
        content: `转载于豆瓣 --- 小小的肚兜
        
有意的孤独者
        
有些人天生有游离人群之外的神气。而他们如同类鱼群，总能互相认出来，然后总是擦肩而过。

夏目漱石的小说给我们提供了如许残酷的样板。他似乎对孤独有种亲切的依恋，总是循着这条线在人生中一步步走来。他就是《我是猫》里的英语教师，《心》里的先生。即时在《哥儿》这般热闹的小说里，也见不到一个受他褒奖的爱好群居的人。

孤独，并不一定是善者的选择，也可能是曾经作恶者的反思幽居之处。
但善与恶又不是那么绝对。

喜欢热闹的人，在漱石的笔下都是不可信赖的，或至少是层次不高的。在孤独中感受不绝于缕的苦味，还能够微笑着和茶水一起咽下，才是他感兴趣的对象。

这些天重看了《心》，那种压抑，平静的绝望，冷酷的剖析，突然的迸发，仍然让我感慨良多。

最近课程少了，交际也一下子少起来，很多时候都在房间里发呆。要我过一辈子这样的生活，实在是很难想象的。莫名的慌张在空气中蔓延，仿佛一枚炸弹爆炸后留下的有毒气体。而我又是一个太有自知之明的人，不会扰得四邻不安，于是睡一个无比长的午觉起来，嘴里都留着淡淡苦味。

孤独的味道并不只有苦，否则我也不会喜欢它了。我是一个被社会规则驱使的俗人，而且没有自我放逐的理由，如先生，所以不得不为着自己的孤独苦恼。如果我出生在鲁宾逊的小岛上，过着人猿泰山的日子，我显然就不用担心这问题。

先生是自己把自己放逐了的。他砍断了自己的气味和踪迹，使野兽渐渐忘了他的存在。他不想再被伤害，也不想再去伤害别人——这在生活的激流中，是不可能的事，所以他像一颗石子似的扑通沉到底，从此不被挟裹着走，不再关心前面有什么。他静止了。

这是上个世纪初的文学，但即使在那个时候，这种人生选择也是非主流的吧。日本人对孤独的感触远远超出中国人。中国人向来耻言孤独，孤独简直就是一个赤身裸体满头疤癞的小孩子，在市井的嘲笑中躲在阴影里。如果有人敢言孤独，那必定是要悬梁刺骨做大事的，人人都指望他从茅庐里出来的时候一鸣惊人。最温和的孤独也是隐士们的逸趣，要用野花素琴梅妻鹤子装点一番，来糊弄老实人。孤独在中国，被名利追逐得无处可逃。

美国人则喜欢神化孤独，一个扛着猎枪去原始丛林玩命的老头子被崇拜得五体投地；在瓦尔登湖边盖茅屋的梭罗永垂不朽。仿佛孤独可以让人一跃成为完人，self-made American hero。

但在日本的文学作品里，充满了瘆人的孤独感。难得的是真实，既不夸大，也不刻意掩饰。夏目漱石的弟子，同样的大师芥川龙之介有一短篇，名为《孤独地狱》。那个僧人按照自己的想法过着放浪形骸的生活，但还是逃不脱孤独的侵袭。这时，他坦然承认，既来之，则安之，既没有自责也没有羞愧，也没有发狂般的想要摆脱它。他知道逃也无用，一个人到哪里都要面对自己。

孤独地狱，悠长假期。何不借此享受和人群的距离，捕捉倾听自己的心跳？平时，它为名利，为他人的目光而跳，现在，它只以自己的名义跳动。

但既然是地狱，绝无贪恋之理，即使是神经强大到什么都能接受的日本人也不例外。寻欢作乐去吧，或者专心为自己的前途铺路去吧。我们需要这些坐标把自己从鬼门关拉回来。人类要面对无尽空虚的虚空，需要的不仅仅是勇气。

平淡是人生的基调，如同一张白纸，不甘寂寞的人拿画笔把它涂成各种各样的颜色。先生是画到一半就停了下来，因为他突然发现这么做没有意义。从某种意义上说，人生本没有意义，不论你给它赋予什么，——这么说就过于消极了。我缺乏把自己的一生当作一次大实验来做的勇气，所以不是哲学家和艺术家。我宁可把日子填得五颜六色面目全非，也不愿相信它本来是一张白纸。很多人和我一样，有意或无意，拼命地想背离让我们绝望的真实。这很愚蠢，但勇敢，有这么多人和我站在一起，我也充满了愚蠢的勇气。

但是死亡，谁能躲得过它的镰刀？
火苗升起，各种颜色的纸被付之一炬，灰烬消失在空虚的虚空。

请相信我，我的心情并非压抑郁闷，或者忿忿不平。这些只是孤独的一次演习。从生到死。

先生终于死去了，也许因为他终于找到了可以倾吐的对象，可以无憾。在拒不相信小人物的孤独的国度，我们还在继续周而复始地孤独。`,
        read: 1,
        remark: 0,
        maintain: 0,
        id: 17,
      },
      {
        date: "2018年12月17日 17:02:42",
        articleName: "《冷场》书评",
        content: `转载于豆瓣 --- 苏方

        李诞是我所认识的人中病得最重又最不需要担心的一个。这话没什么论据支撑，就跟梦里得的谕差不多。我跟他没说过几句话，还当面撒过谎，今年刚承认。签给我的书里他写：没你强，随便看看。我看他也撒了谎。就算一报还一报。

          篇目排序有意思， 先慢后快， 由表及里。 我等不及， 先读了《 雪地》， 轰然一震： 没想到李诞如此大的野心。

          《 雪地》 是诗样的。 双线里呈现出音乐的韵律， 如同一场二重奏。 空间自然地几何化， 有建筑般的美。 这一切建立在语言上。 和其余篇目相比，《 雪地》 的语言更加严肃。 凯西存在的世界里， 字句整齐， 而在雪地化的叙述中， 主语开始被忽略， 速度加快， 一切消灭的同时一切建造， 阶梯刚刚出现便已一步登顶， 刚刚一步登顶阶梯早已消失。 奔跑与沉溺切换， 在场与旁观切换， 快感与劳动切换， 存在与存在、 我与我切换， 直到一种内在真实确切地显形， 虚构的秩序终于完全建立。 你戳了吗？ 通向雪地的门， 他数次诱惑。

          我没有。 我不敢。

          写这些的时候整本书还没读完， 但也说不定， 如果时间是骗局。 就读过的篇目说感受， 境比意写得好， 恶比爱写得好。 奥登把旧作归为四类， 一类是垃圾， 一类是由于无能或急躁而受损害的， 一类虽不令人反感， 但缺乏重要性—— 它们是构成文集的主体， 因为如果只有第四类，“ 那些他怀着真诚感激的作品”， 那他的书就会太过单薄而令人沮丧。《 雪地》 一定是第四类。

          有一些词语的突兀置放令人不得不注意（ 读时候没标记， 不现找了）， 是打破文学教育的谐用， 是李诞的幽默感作祟。 我欣赏这类用词， 是另一维度的恰当， 也是对正统习性的嘲讽。 小说正在变得越来越正经， 概念和技术的传承被筛选被规范， 血统日渐高贵而种族日渐单一。 那不是我的理解中小说应有的面孔。 而李诞的语言让人兴奋： 私生子回家了。

          在人物和故事之外， 小说的语言本身即应有其意识， 甚至意志。 它并非仅仅字词的安排， 而是声响、 节奏、 味道、 质地， 是全然独立的性情， 是孕育王国的土地。 我偏爱语言出色的写作者， 他们真正掌握着文学的工具而不只仰赖于习得技巧。 好作品应当难于翻译—— 我的偏见。

          喜欢《 雪地》 的另一重原因是， 李诞在其中的袒露让秘密变得无趣， 一镜到底。 当交流成本越来越低， 真正的对话开始不被珍惜。 我们对于对话者的轻率选择和懒惰僵持， 使得语言和身份越来越贫瘠。《 雪地》 是对贫瘠的拒绝， 是对对话者的重新选择。 是野心也是勇气。

          《 白光》 似乎呼声高， 但我觉得这一篇的完成对李诞来说， 并不需要时间和体力之外的东西。

          一点题外话是， 作家出书是事实， 而李诞出书成了现象。 这仍然是对话者的乱闯， 梦想家在狂欢。 不如就凯撒的归凯撒， 上帝的归上帝， 演员的归演员， 李诞的归李诞吧。

          已经有太多小说不从生活中来了。 更多的小说从阅读中来， 从流行和教化中来。 于是早期作品往往是新的， 之后很难不越来越旧。 李诞是生活着的， 能够与这股吞噬对抗到底的作家称得上伟大， 因为疲倦早晚弥漫开来， 仿佛时间、 影子和鲸。 希望雪国长在， 大鱼不死， 希望李诞不会太快疲倦。 `,
        read: 1,
        remark: 0,
        maintain: 0,
        id: 18,
      }
    ],


  },
})