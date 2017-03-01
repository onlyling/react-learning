# react 学习笔记

> 两周时间学习 `react`

背景：曾看过一些 `react` 的新手视频，能使用 `Vue` 及其周边工具开发SPA。

## 2017-02-27

周末两天看了中文文档，加起来的时间大概四五个小时，知不知道为啥，看不下去-、- 是不是文档不好看呢。

github上找的demo，和文档上的例子，书写代码的方式有出入，看起来有点别扭。一个是es5，一个是es6，目的都差不多吧。

周一就开始干代码，来，先把环境搭上。

起初想的是把vue-cli的那套开发环境搬过来，结果总是搞不上。在github上找到一个模板（[react-webpack-boilerplate](https://github.com/SidKwok/react-webpack-boilerplate)），可以用。

> 小插曲，按照上面那个模板安装各种依赖，文件都是配置一毛一样的，运行起来会报错。后来把package里面的版本号也一致才没有问题。

尝试了一下官方的`react-create-app`，太方便了，一个命令行就搞定了。但是，没有在项目文件中找到配置文件，囧。谷歌了一下才知道怎么玩转用户配置（[在 create-react-app 中使用 - Ant Design](https://ant.design/docs/react/use-with-create-react-app-cn)），正好后期也会学习使用`Ant Design`。

### react-router

不知道为啥，第一件事就是把路由配置搞上，找demo，看文档，终究算是搞好了。

```bash

## 看的demo\文档，大多都是

|-- /
|--|-- /home
|--|-- /list

## 我理想的状态是
|-- /
|-- /home
|-- /list

```

可能是用 `Vue` 的时候，路由就是这么配置的。

另外，在做路由配置的时候，从看文档上感觉比较推荐 `JSX` 的方式推荐，比较 `Vue` 先入为主，用 routes 的方式习惯一些。另外，文档上动态路由的配置方式也是用 routes 的时候，路由就是这么配置的。

```jsx

const routeConfig = [
  { path: '/',
    component: App
  },
  { path: '/xxx',
    component: App
  }
]

React.render(<Router routes={routeConfig} />, document.body)

```

初次配置是类似这样的，在路由切换的时候总是报错，当时很懵，感觉没有错。

相似的路由数据，用 `JSX` 的方式，没问题，我只能服软了。

```jsx
<Router history={hashHistory}>
  <Route path="/" onEnter={({ params }, replace) => replace('/home')}></Route>
  <Route path="/home" getComponent={(location, callback) => {
    require.ensure([], function (require) {
      callback(null, require('./page/home').default)
    })
  }}></Route>
  <Route path="/list" getComponent={(location, callback) => {
    require.ensure([], function (require) {
      callback(null, require('./page/list').default)
    })
  }}></Route>
  <Route path="*" component={page404}></Route>
</Router>

```

> webpack 的缘故，可能会报错，所以加上 `default`

访问 `/` 的时候直接导向 `/home`，`/home` 的路由是异步加载的。

``` jsx
// 其他部分就是把routes直接渲染出来
ReactDOM.render(
  Routes,
  document.getElementById('root')
)

```

配置好路由就开始撸其他公共文件了，写到header部分的时候，要加链接，问题来了。

把header加到每个page页面，所有带链接的地方，渲染出来的都是空的 `a` 标签。当时就懵了。

按照 `Vue` 的路由方式，只要在路由视图里面，就可以写链接。

回头看看路由文档的代码，似乎都有一个共性。当前可以写链接的地方，都是在某个路由下，跳转它的内部一个 `children`

```jsx
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)

```

似乎明白了什么，当前路由下的标签能改变子路由信息。但是，哪儿有问题。

```jsx

class Roots extends Component {
  render() {
    return (
      <div className="m-page">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

const RouteConfig = (
  <Router history={hashHistory}>
    <Route path="/" component={Roots}>
      <IndexRoute getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/home').default)
        })
      }}></IndexRoute>
      <Route path="list" getComponent={(location, callback) => {
        require.ensure([], function (require) {
          callback(null, require('./page/list').default)
        })
      }}></Route>
      <Route path="*" component={page404}></Route>
    </Route>
  </Router>
)

```

## 2017-02-28

今儿我也不知道干了嘛，主要是练习了拆分组件吧，以及 `router` 上的一些东西。

有一个地方用到了 `classSet` 这个工具，有点小坑。

```jsx
var cx = React.addons.classSet;
```

文档都是直接通过插件引入的，真实使用的时候 `React` 上面就没有 `addons` 这个属性。

后来谷了一下，`classSet` 已经单独分离出来了。

``` bash
npm i react-addons --save
```

```jsx
import { classSet } from 'react-addons'
```
这样就可以用了。

关于路由上的 `query` 信息，直接在 `props` 上获取 0.0

```jsx
// 不知道对不对
this.props.location.query
```

在做 `setState` 的时候，还是要注意一下。

```javascript
setTimeout(() => {
  // 假若说页面离开了，这样还是会继续修改state的数据，会报错。
  this.setState({
    data: this.state.datas[id]
  })

}, 2000)
```

## 2017-03-01

今天上午出去面试了，下午一部分时间看面试中不懂得和改项目需求。

那么，今天也就没做啥子事了。

搜索了一下如何解决昨天最后说的 `setState` 报错的问题。

组件进入异步获取数据，还未获取到数据，组件就被摧毁了，但是异步在继续。结果就好组件没了，数据拿到了。

在 `componentWillUnmount` 生命周期中停止异步，也就停掉 `setState` 这个操作。其他的就是加入一个数据管理的东西，有点高深。

`isMounted` 已经被移除了，感觉就算没有移除，也不会解决问题。异步获取数据的时候，其实组件已经完成了渲染。


