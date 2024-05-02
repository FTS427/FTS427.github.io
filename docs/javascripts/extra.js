var gitalk = new Gitalk({
    clientID: 'Ov23ctHFDES6ZfMXo8l8',
    clientSecret: '91cf57da04febc0840de5243f71eea0850607bba',
    repo: 'FTS427.github.io',
    owner: 'FTS427',
    admin:  ['FTS427'],
    id: location.pathname,      // Ensure uniqueness and len
    language:'zh-CN', // 语言
    distractionFreeMode: false  // 无干扰模式
})
gitalk.render('gitalk-container')
