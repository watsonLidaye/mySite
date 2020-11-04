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

 Date: 04/11/2020 16:16:15
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
