
关于Adaboost，在[先前的一篇文章](http://www.csuldw.com/2015/07/05/2015-07-05-ML-algorithm-Adaboost/)里，也介绍过它的步骤与实现，但理论上的推导未曾涉及。虽然Adaboost算法思想通俗易懂，但权值更新公式的由来，想必并非人人皆知。本文着重于从理论层面进一步阐述Adaboost，最终推导出迭代时的样本权值更新公式。

<!-- more -->

关于本文使用的数学符号的具体解释，见下表：

| 变量 | 符号  | 描述|
| -- | -- | -- |
| 训练数据| $(X, Y)$| 第$i$个样本为$(x\_i, y\_i)$，其中$x\_i =( x\_{i1}, x\_{i2}, \cdots, x\_{id} )$，$y_i \in \lbrace +1, -1 \rbrace $ |
| 错误率| $e$ | 第$m$个弱分类器的错误率为$e\_m$ |
|分类器的系数| $\alpha$ | 第$m$个弱分类器的系数为$\alpha\_m$|
| 样本权重向量 |  $D$ | 迭代至第$m$次时的第$i$个样本的权值为$D\_{m,i}$，初始阶段，所有样本的权重值均为$\frac{1}{N}$|
| 归一化因子| $Z$| 迭代至第$m$次的的归一化因子为$Z\_m$|
| 组合分类器| f(x) | 迭代至第$m$次的组合分类器为$f\_m(x)$|
|最终分类器| G(X)|最终分类器为$G(X) = sign(f\_M(x))$|

下面来看看Adaboost的算法思想与其权值的推导。

## 算法思想

关于Adaboost，它是boosting算法，从bias-variance（偏差-方差）的角度来看，boosting算法主要关注的是降低偏差。仔细想想便可理解，因为boosting算法每个分类器都是弱分类器，而弱分类器的特性就是high-bias & low variance（高偏差-低方差），其与生俱来的优点就是泛化性能好。因此，将多个算法组合起来之后，可以达到降偏差的效果，进而得到一个偏差小、方差小的泛化能力好的模型。另外，Adaboost的损失函数是指数损失$L(y, f(x)) = e^{-yf(x)}$。为了掌握Adaboost的整个流程，我将其思想通过下图简单的进行了一番总结（由于此图是我使用LaTex编辑的，所以如有表达不妥的地方，还请读者指出）：

![](http://www.csuldw.com/assets/articleImg/adaboost-algorithm.png)
<div class="caption">图一 Adaboost 算法</div>

Adaboost算法可以归纳至三步，如下：

- 第一步：初始化每个样本的权重值为$\frac{1}{N}$；
- 第二步：迭代$M$次，每次都根据错误率$e\_m$不断修改训练数据的权值分布（此处需要确保弱学习器的错误率$e$小于$0.5$），样本权值更新规则为增加分类错误样本的权重，减少分类正确样本的权重；
- 第三步：根据每个弱学习器的系数$\alpha\_m$，将$M$个弱学习器组合到一起，共同决定最终的学习结果，即$G(X) = \sum\_{m=1}^M \alpha\_m G\_m(x)$.

对于上面给出的算法，可能会存在一些疑问，诸如：

1. 弱学习器的错误率$e$为何要小于$0.5$?
2. 弱学习器的系数$\alpha$这个等式如何得到的？
3. 归一化因子$Z\_m$又有何寓意？

对于第一点，应该比较容易理解，因为如果弱学习器的效果都没有随机猜测好，那么学习得到的模型毫无疑问肯定是无用的。事实上，在上面三个问题中，最让人不解的应该是这个$\alpha$的取值。**为什么它会是这种$\eqref{1}$形式呢？**下面我们一起来推导一下。

## 权值推导

从图一我们可以看到，迭代至第$m$次时，分类器的系数计算公式为:

$$
\alpha\_m = \frac{1}{2} ln \left \( \frac{1 - e\_m}{e\_m} \right \)
\tag{1}\label{1}$$

然而，为何会是它呢？其推导方式有两种，第一种是最小化训练误差界进行推导；第二种是最小化损失函数进行推导。两者在本质上是一样的，都是为了求最小化某个式子时的$\alpha$值。在下面的篇章中，只涉及第一种。也就是为了确定$\alpha$的表达式，根据**训练误差界**来逐步推导。

### 训练误差界

从图一可知，最终得到的函数表达式是$G(x)$，然而，当$G(x\_i) \neq y\_i$时，$y\_i f\_M(x\_i) < 0$，从而得到$e^{-y\_i f\_M(x\_i)} \geq 1$，进而可以得到：

$$
\frac{1}{N} \sum\_{i=1}^N I(G(x\_i) \neq y\_i)  \leq \frac{1}{N} \sum\_i e^{ - y\_i f\_M(x\_i)}
\tag{2}\label{2}$$

从图一中还可以看到，更新训练样本的权值分布公式如下：

$$
D\_{m+1, i} = \frac{D\_{m,i}}{Z\_m} \cdot exp \lbrace -\alpha\_m y\_i G_m(x\_i) \rbrace
\tag{3}\label{3}$$

现在，对权值更新公式$\eqref{3}$变形，得到下列式子：

$$
Z\_m D\_{m+1, i} = D\_{m,i} \cdot exp \lbrace -\alpha\_m y\_i G_m(x\_i) \rbrace
\tag{4}\label{4}$$

对于上面这个式子，非常重要，是下面这个推导的核心。对于公式$\eqref{2}$不等于的右式，我们可以做如下推导：

$$
\begin{aligned}
\frac{1}{N}\sum\_i e^{ - y\_i f\_M(x\_i)}
&= \frac{1}{N}\sum\_i exp \left ( - \sum\_{m=1}^M \alpha\_m y\_i G\_m(x\_i) \right )\\\\
&\stackrel{\color{red}{D\_{1,i} = \frac{1}{N}}}=  \sum\_{i} D\_{1,i} \prod\_{m=1}^{M} exp \left ( -\alpha\_m y\_i G\_m(x\_i) \right ) \\\\
&\stackrel{\color{red}{\eqref{4}}}=  \sum\_i Z\_1 D\_{2,i} \prod\_{m=2}^M exp \left ( -\alpha\_m y\_i G\_m(x\_i) \right ) \\\\
&\stackrel{\color{red}{\eqref{4}}}= Z\_1 \cdot \sum\_i  Z\_2 D\_{3,i} \prod\_{m=3}^M exp \left ( -\alpha\_m y\_i G\_m(x\_i) \right ) \\\\
&\stackrel{\color{red}{\eqref{4}}}= Z\_1 Z\_2 \cdot \sum\_i  Z\_3 D\_{4,i} \prod\_{m=4}^M exp \left ( -\alpha\_m y\_i G\_m(x\_i) \right ) \\\\
&= \prod\_{m=1}^M Z\_m
\end{aligned}
$$

因此可以得出，Adaboost的误差界为

$$
\frac{1}{N} \sum\_{i=1}^N I(G(x\_i) \neq y\_i)  \leq \frac{1}{N} \sum\_i e^{ - y\_i f\_M(x\_i)} = \prod\_{m=1}^M Z\_m
\tag{5}\label{5}$$

从公式$\eqref{6}$可以看出，在每一轮生成弱分类器$G\_m(x)$时，应使归一化因子$Z\_m$尽可能的小，而最小化时的$\alpha$就是我们要求的$\alpha$， 即求优化表达式$\underset{\alpha\_m}{min} \ Z\_m(\alpha\_m)$。


### 系数$\alpha$

将问题转化为求最小值，这就比较简单了，只需要对$Z\_m$求$\alpha\_m$的导数，然后令导数为零，求出此时的$\alpha\_m$就好了。OK，下面给出计算过程如下：

$$
\begin{aligned}
Z\_m & = \sum\_{i=1}^{N} D\_{m,i} \cdot exp \lbrace - \alpha y\_i G\_m(x\_i) \rbrace \\\\
& = \sum\_{G\_{m}(x\_i) =  y\_i} D\_{m,i} \cdot e^{-\alpha\_m} +  \sum\_{G\_{m}(x\_i) \neq y\_i} D\_{m,i} \cdot e^{\alpha\_m} \\\\
& = (1-e\_m) \cdot e^{- \alpha\_m} + e\_m \cdot e^{\alpha\_m} \\\\
\end{aligned}
\tag{6} \label{6}$$

$$
\frac{\partial Z\_m }{\partial \alpha\_m} = -(1 - e\_m) \cdot e^{-\alpha\_m} + e\_m \cdot e^{\alpha\_m}
\tag{7} \label{7}$$

然后令导数式$\eqref{7}$等于$0$，简单的进行化简即可求得$\eqref{1}$式。

> 说明：对于$\eqref{6}$式的变形，从第一步变换为第二步时，应用的规则是，当样本被正确分类，$y\_iG\_m(x\_i) = 1$；当样本被错误分类，$y\_iG\_m(x\_i) = -1$。而从第二步到第三步，则可以理解为正确分类的样本所占比例为$1-e\_m$，错误分类的样本占比$e\_m$。



### 样本权值

通过上面的推导，得到$\alpha$之后，根据$\eqref{1}$式，又可以化简得到正确分类时的$e^{-\alpha\_m}$ 和错误分类时的$e^{\alpha\_m}$ ，公式如下：

$$
e^{-\alpha\_{m}} = e^{ - \frac{1}{2} ln \left ( \frac{1 - e\_m}{e\_m}  \right )} = \sqrt {\frac{e\_m}{1-e\_m}} \\
\tag{8} \label{8}$$

$$
e^{\alpha\_{m}} = e^{ \frac{1}{2} ln \left ( \frac{1 - e\_m}{e\_m}  \right )} = \sqrt {\frac{1-e\_m}{e\_m}}
\tag{9} \label{9}$$

而对于归一化因子$Z\_m$，又可以通过$\alpha$推导其与错误率$e$的关系，推导过程如下：

$$
\begin{aligned}
Z\_m & = \sum\_{i=1}^{N} D\_{m,i} \cdot exp \lbrace - \alpha y\_i G\_m(x\_i) \rbrace \\\\
& = \sum\_{G\_{m}(x\_i) =  y\_i} D\_{m,i} \cdot e^{-\alpha\_m} +  \sum\_{G\_{m}(x\_i) \neq y\_i} D\_{m,i} \cdot e^{\alpha\_m} \\\\
& = (1-e\_m) \cdot e^{- \alpha\_m} + e\_m \cdot e^{\alpha\_m} \\\\
& \stackrel{\color{red}{\eqref{8}\eqref{9}}}= (1-e\_m) \cdot \sqrt{\frac{e\_m}{1-e\_m}} + e\_m \cdot \sqrt{\frac{1-e\_m}{e\_m}} \\\\
& = 2 \sqrt{e\_m (1-e\_m)}
\end{aligned}
\tag{10} \label{10}$$



因此，根据$\eqref{10}$式的推导结果，可以进一步得到，当样本被正确分类时，$y\_iG\_m(x\_i) = 1$，权值公式可更新为：

$$
\frac{exp \lbrace -\alpha\_m y\_i G_m(x\_i) \rbrace}{Z\_m} = \frac{e^{-\alpha\_m}}{Z\_m}  \stackrel{\color{red}{\eqref{9}\eqref{10}}}= \sqrt{\frac{ \color{blue}{e\_m}}{1-e\_m}} \cdot \frac{ 1}{2\sqrt{ \color{blue}{e\_m} (1-e\_m)}} = \frac{1}{2(1-e\_m)}
\tag{11} \label{11}$$

当样本被错误分类时，$y\_iG\_m(x\_i) = -1$，权值公式可更新为：

$$
\frac{exp \lbrace -\alpha\_m y\_i G_m(x\_i) \rbrace}{Z\_m} = \frac{e^{\alpha\_m}}{Z\_m} \stackrel{\color{red}{\eqref{9}\eqref{10}}}= \sqrt{\frac{ \color{blue}{1-e\_m}}{e\_m}} \cdot \frac{ 1}{2\sqrt{e\_m (\color{blue}{1-e\_m})}} = \frac{1}{2e\_m}
\tag{12} \label{12}$$


公式$\eqref{11}$与公式$\eqref{12}$就是最终的权值更新系数，只需将其带入到公式$\eqref{3}$即可求得新的样本权值。

## Summary

本文主要侧重于权值的推导，而编写这篇博文的目的主要是为了弥补先前学习过程中的疏忽与不足，进而达到学习的目的。关于文章的实现，可去博主的github下载源码[csuldw-Adaboost](https://github.com/csuldw/MachineLearning/tree/master/Adaboost) （各位同学，记得给个star噢^_^），另外，也可参考先前的博文[Machine Learning algorithm - Adaboost](http://www.csuldw.com/2015/07/05/2015-07-05-ML-algorithm-Adaboost/)。关于机器学习的其它文章，本博客将会持续更新。

## References

- Y Freund，R Schapire, A decision-theoretic generalization of on-line learning algorithms and an application to boosting, *Journal of Popular Culture*, 1997
- 统计学习方法》 by 李航
- [Wikipedia-Adaboost ](https://en.wikipedia.org/wiki/AdaBoost)
- 《机器学习 Machine Learning》 by 周志华
