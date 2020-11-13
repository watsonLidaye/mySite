/*
 Navicat Premium Data Transfer

 Source Server         : 本地服务
 Source Server Type    : MySQL
 Source Server Version : 50640
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50640
 File Encoding         : 65001

 Date: 13/11/2020 16:39:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for connect_table
-- ----------------------------
DROP TABLE IF EXISTS `connect_table`;
CREATE TABLE `connect_table`  (
  `id` int(32) NOT NULL COMMENT '主键id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `connect` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `remake` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of connect_table
-- ----------------------------
INSERT INTO `connect_table` VALUES (7, '测试2', '13837213313', 'life');
INSERT INTO `connect_table` VALUES (8, '测试3', '13738231321', '测试');
INSERT INTO `connect_table` VALUES (9, '测', '13423123131', '测');
INSERT INTO `connect_table` VALUES (10, 'lipeife', '13837213213', 'c傻了');
INSERT INTO `connect_table` VALUES (11, '132132', '61230@qq.com', 'dsa ');
INSERT INTO `connect_table` VALUES (12, '测试', '13973213132', '测试内筒');
INSERT INTO `connect_table` VALUES (13, '理赔分', '213213132@qq.com', 'lqewqe');
INSERT INTO `connect_table` VALUES (14, 'lipeifeng', '13873812311', 'dsad');
INSERT INTO `connect_table` VALUES (15, 'dsa ', '123123@qq.com', '123123');

-- ----------------------------
-- Table structure for content
-- ----------------------------
DROP TABLE IF EXISTS `content`;
CREATE TABLE `content`  (
  `id` int(32) NOT NULL COMMENT '主键',
  `categoryId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '文章分类id',
  `content` varchar(20000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '文章',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '文章头部',
  `idDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '是否删除',
  `createTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for content_type
-- ----------------------------
DROP TABLE IF EXISTS `content_type`;
CREATE TABLE `content_type`  (
  `id` int(32) NOT NULL COMMENT '内容类型id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '内容名字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image`  (
  `id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '主键',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '图片地址',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片类型 2：normal 1：simple',
  `useType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片使用的类型：1，首页最近，2，图片分类，3，文章，4背景',
  `categoryId` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类id',
  `isDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '是否删除',
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES ('1', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/_MG_1282.JPG', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('2', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_8754.jpg', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('3', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_6099.JPG', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('4', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_4939.JPG', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('5', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_3865.jpg', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('6', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_9762.jpg', '1', '1', '0', '0', '2020-11-5');

-- ----------------------------
-- Table structure for img_type
-- ----------------------------
DROP TABLE IF EXISTS `img_type`;
CREATE TABLE `img_type`  (
  `id` int(11) NOT NULL COMMENT '图片类型id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '图片类型名字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for link_me
-- ----------------------------
DROP TABLE IF EXISTS `link_me`;
CREATE TABLE `link_me`  (
  `id` int(32) NOT NULL COMMENT '主键id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '联系人名字\r\n',
  `connect` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '联系联系方式',
  `remark` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '联系人内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for short_content_detail
-- ----------------------------
DROP TABLE IF EXISTS `short_content_detail`;
CREATE TABLE `short_content_detail`  (
  `id` int(32) NOT NULL COMMENT '主键id',
  `content` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '内容',
  `cateId` int(32) DEFAULT NULL COMMENT '对应的cateid\r\n',
  `islike` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '喜欢的数量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of short_content_detail
-- ----------------------------
INSERT INTO `short_content_detail` VALUES (1, '[{type:\'image\',content:\'jianglijuan/20201110202722.jpg\'},{type:\'image\',content:\'jianglijuan/20201110202729.jpg\'},{type:\'image\',content:\'jianglijuan/20201110202742.jpg\'},{type:\'image\',content:\'jianglijuan/20201110202746.jpg\'},{type:\'image\',content:\'jianglijuan/20201110202749.jpg\'},{type:\'image\',content:\'jianglijuan/20201110202753.jpg\'},{type:\'image\',content:\'jianglijuan/20201110202757.jpg\'}]', 1, '0');

-- ----------------------------
-- Table structure for short_content_type
-- ----------------------------
DROP TABLE IF EXISTS `short_content_type`;
CREATE TABLE `short_content_type`  (
  `id` int(32) NOT NULL COMMENT '主键id',
  `shortName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '短文类型名字',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of short_content_type
-- ----------------------------
INSERT INTO `short_content_type` VALUES (0, '其他');
INSERT INTO `short_content_type` VALUES (1, '女孩儿');

-- ----------------------------
-- Table structure for shortcontent
-- ----------------------------
DROP TABLE IF EXISTS `shortcontent`;
CREATE TABLE `shortcontent`  (
  `id` int(32) NOT NULL COMMENT '主键',
  `shortContent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '短评内容',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '短评图片',
  `isDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '是否删除',
  `createTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '时间',
  `shortContentId` int(11) NOT NULL COMMENT '内容id  0时仅仅是查看图片，不为跳到短文章页',
  `isLike` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '喜欢数量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of shortcontent
-- ----------------------------
INSERT INTO `shortcontent` VALUES (1, '倒影只不过是倒影而已', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_9977.jpg', '0', '2020-11-9', 0, '23');
INSERT INTO `shortcontent` VALUES (2, '靖港古镇旁边的狗子', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_6064.JPG', '0', '2020-11-9', 0, '9');
INSERT INTO `shortcontent` VALUES (3, '自然的味道', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_5332.JPG', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (4, '橘子洲头的桥', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_3261_1.jpg', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (5, '橱窗里的自己', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_7984.jpg', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (6, '冬日里微笑的狗子', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_1597.jpg', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (7, '湘江大桥每天的车流', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_3382.jpg', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (8, '起风了', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_8780.jpg', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (9, '暗', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_7637_1.jpg', '0', '2020-11-9', 1, '11');
INSERT INTO `shortcontent` VALUES (10, '日常', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_8554.jpg', '0', '2020-11-9', 0, '2');
INSERT INTO `shortcontent` VALUES (11, '整装待发拍照去，删图选图把家还', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_3023.jpg', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (12, '梅溪湖破旧的单车', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_3667.jpg', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (13, '冲鸭！', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_4914.JPG', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (14, '你已经间隔1年没弹琴了', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_5411_1.jpg', '0', '2020-11-9', 0, '0');
INSERT INTO `shortcontent` VALUES (15, '这样的糖油粑粑才正宗', 'https://picture-1252636416.cos.ap-chengdu.myqcloud.com/normal/_MG_6055.JPG', '0', '2020-11-9', 0, '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `name` text CHARACTER SET latin1 COLLATE latin1_swedish_ci,
  `id` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (NULL, 0, 23);
INSERT INTO `user` VALUES ('213', 1, 32);
INSERT INTO `user` VALUES ('2', 2, 22);
INSERT INTO `user` VALUES ('3', 3, 33);
INSERT INTO `user` VALUES ('33', 4, 33);
INSERT INTO `user` VALUES ('44', 5, 44);
INSERT INTO `user` VALUES ('44', 6, 44);
INSERT INTO `user` VALUES ('1', 7, 2);
INSERT INTO `user` VALUES ('2132123', 8, 123456);
INSERT INTO `user` VALUES ('sadsad', 9, 123456);
INSERT INTO `user` VALUES ('dsad', 10, 121321);
INSERT INTO `user` VALUES ('dsad', 11, 121321);

SET FOREIGN_KEY_CHECKS = 1;
