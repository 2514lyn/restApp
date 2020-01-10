
USE `bdm72188977_db`;
CREATE TABLE `drink` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `num` int(10) NOT NULL,
  `price` float NOT NULL,
  `place` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `drink` (`id`, `name`, `num`, `price`, `place`) VALUES
(1, '可乐', 500, 4.5, './img/drink/kele.jpg'),
(2, '橙汁', 500, 3.5, './img/drink/chengzhi.jpg');

-- --------------------------------------------------------


--
-- 表的结构 `meat`
--

CREATE TABLE `meat` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `num` int(10) NOT NULL,
  `price` float NOT NULL,
  `place` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `meat`
--

INSERT INTO `meat` (`id`, `name`, `num`, `price`, `place`) VALUES
(1, '鹌鹑蛋', 100, 6, './img/meat/anchundan.jpg'),
(2, '肥牛', 100, 8, './img/meat/feiniu.jpg'),
(3, '火腿肠', 100, 3.5, './img/meat/huotuichang.jpg'),
(4, '蟹棒', 100, 4, './img/meat/xiebang.jpg'),
(5, '羊肉', 100, 7.5, './img/meat/yangrou.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `package`
--

CREATE TABLE `package` (
  `packageid` int(10) NOT NULL,
  `packagename` varchar(20) NOT NULL,
  `packageprice` float NOT NULL,
  `packagediscount` int(10) NOT NULL,
  `packagelimit` int(10) NOT NULL,
  `packageplace` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `package`
--

INSERT INTO `package` (`packageid`, `packagename`, `packageprice`, `packagediscount`, `packagelimit`, `packageplace`) VALUES
(1, '养生菌汤单人套餐', 35.5, 7, 2, './img/taocan/yangshengjuntang.jpg'),
(2, '无辣不欢单人套餐', 28.9, 8, 2, './img/taocan/wulabuhuan.jpg'),
(3, '丸来丸去单人套餐', 32.8, 7, 2, './img/taocan/wanlaiwanqu.jpg'),
(4, '麻辣肥牛双人套餐', 45.6, 8, 2, './img/taocan/malafeiniu.jpg'),
(5, '海鲜双人套餐', 50.8, 8, 2, './img/taocan/haixian.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `produce`
--

CREATE TABLE `produce` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `pimg` varchar(200) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `produce`
--

INSERT INTO `produce` (`id`, `name`, `pimg`, `price`) VALUES
(1, '测试', 'test.png', 1),
(2, '测试2', 'test.png', 2),
(3, '测试3', 'test.png', 1),
(4, '测试4', 'test.png', 2),
(5, '测试5', 'test.png', 9);

-- --------------------------------------------------------

--
-- 表的结构 `soup`
--

CREATE TABLE `soup` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `num` int(10) NOT NULL,
  `price` float NOT NULL,
  `place` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `soup`
--

INSERT INTO `soup` (`id`, `name`, `num`, `price`, `place`) VALUES
(1, '辣汤汤底', 1000, 1.5, './img/tangdi/la.jpg'),
(2, '菌汤汤底', 1000, 2, './img/tangdi/juntang.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `staple`
--

CREATE TABLE `staple` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `num` int(10) NOT NULL,
  `price` float NOT NULL,
  `place` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `staple`
--

INSERT INTO `staple` (`id`, `name`, `num`, `price`, `place`) VALUES
(1, '米饭', 500, 1.5, './img/staple/mifan.jpg'),
(2, '方便面', 500, 2.5, './img/staple/fangbianmian.jpg');

-- --------------------------------------------------------






--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `userid` int(7) NOT NULL,
  `username` varchar(25) CHARACTER SET utf8 NOT NULL,
  `userpw` varchar(20) CHARACTER SET utf8 NOT NULL,
  `userphonenumber` varchar(25) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`userid`, `username`, `userpw`, `userphonenumber`) VALUES
(1, 'jmm', '123456', '18955665597');

-- --------------------------------------------------------

--
-- 表的结构 `vegetable`
--

CREATE TABLE `vegetable` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `num` int(10) NOT NULL,
  `price` float NOT NULL,
  `place` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `vegetable`
--

INSERT INTO `vegetable` (`id`, `name`, `num`, `price`, `place`) VALUES
(1, '金针菇', 200, 2.5, './img/vegetable/jinzhengu.jpg'),
(2, '面条', 500, 2.5, './img/vegetable/miantiao.jpg'),
(4, '蘑菇', 200, 3.5, './img/vegetable/mogu.jpg'),
(5, '藕片', 200, 2.5, './img/vegetable/oupian.jpg'),
(6, '青菜', 200, 1.5, './img/vegetable/qingcai.jpg'),
(7, '土豆片', 200, 2, './img/vegetable/tudoupian.jpg'),
(8, '西红柿', 200, 2, './img/vegetable/xihongshi.jpg'),
(9, '西蓝花', 200, 2.5, './img/vegetable/xilanhua.jpg');

--
-- 转储表的索引
--

--
-- 表的索引 `drink`
--
ALTER TABLE `drink`
  ADD PRIMARY KEY (`id`);



--
-- 表的索引 `meat`
--
ALTER TABLE `meat`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`packageid`);

--
-- 表的索引 `produce`
--
ALTER TABLE `produce`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `soup`
--
ALTER TABLE `soup`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `staple`
--
ALTER TABLE `staple`
  ADD PRIMARY KEY (`id`);




--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- 表的索引 `vegetable`
--
ALTER TABLE `vegetable`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `drink`
--
ALTER TABLE `drink`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `meat`
--
ALTER TABLE `meat`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `package`
--
ALTER TABLE `package`
  MODIFY `packageid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `produce`
--
ALTER TABLE `produce`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用表AUTO_INCREMENT `soup`
--
ALTER TABLE `soup`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `staple`
--
ALTER TABLE `staple`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;



--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `vegetable`
--
ALTER TABLE `vegetable`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;
