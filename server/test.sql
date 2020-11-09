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

 Date: 09/11/2020 14:11:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
INSERT INTO `image` VALUES ('1', '/images/normal/_MG_5411_1.jpg', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('2', '/images/normal/_MG_8754.jpg', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('3', '/images/normal/_MG_6099.JPG', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('4', '/images/normal/_MG_4939.JPG', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('5', '/images/normal/_MG_3865.jpg', '1', '1', '0', '0', '2020-11-5');
INSERT INTO `image` VALUES ('6', '/images/normal/_MG_9762.jpg', '1', '1', '0', '0', '2020-11-5');

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
-- Table structure for shortcontent
-- ----------------------------
DROP TABLE IF EXISTS `shortcontent`;
CREATE TABLE `shortcontent`  (
  `id` int(32) NOT NULL COMMENT '主键',
  `shortContent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '短评内容',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '短评图片',
  `isDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '是否删除',
  `createTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of shortcontent
-- ----------------------------
INSERT INTO `shortcontent` VALUES (1, '倒影只不过是倒影而已', '/images/normal/_MG_9977.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (2, '靖港古镇旁边的狗子', '/images/normal/_MG_6064.JPG', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (3, '自然的味道', '/images/normal/_MG_5332.JPG', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (4, '橘子洲头的桥', '/images/normal/_MG_3261_1.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (5, '橱窗里的自己', '/images/normal/_MG_7984.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (6, '冬日里微笑的狗子', '/images/normal/_MG_1597.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (7, '湘江大桥每天的车流', '/images/normal/_MG_3382.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (8, '起风了', '/images/normal/_MG_8780.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (9, '暗', '/images/normal/_MG_7637_1.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (10, '日常', '/images/normal/_MG_8554.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (11, '整装待发拍照去，删图选图把家还', '/images/normal/_MG_3023.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (12, '梅溪湖破旧的单车', '/images/normal/_MG_3667.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (13, '冲鸭！', '/images/normal/_MG_4914.JPG', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (14, '你已经间隔1年没弹琴了', '/images/normal/_MG_5411_1.jpg', '0', '2020-11-9');
INSERT INTO `shortcontent` VALUES (15, '这样的糖油粑粑才正宗', '/images/normal/_MG_6055.JPG', '0', '2020-11-9');

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
