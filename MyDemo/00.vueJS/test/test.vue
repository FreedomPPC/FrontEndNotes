<style lang="less" scoped>@import './RoomItem.less';</style>

<template>
<li class="sign sign-{{room.privilegelogo}}" v-if="hideItem" v-cloak>
    <div class="room-item-container {{room.StatusClass}}">
        <div class="visible-block flex-block fa" :class="{'toggle-block': canExpand}">
            <div class="flex-img" @click="lookThisRoom()">
                <img :src="room.imageUrl" alt="">
            </div>
            <div class="flex-item flex-detail" @click="clickItem(room)">
                <h3>{{room.houseTypeName}}</h3>
                <p class="remainder ThemeColor" :class="{'transparent':EnableHideRooms || (UserRole.IsPact &&!CurPackage.pact.price) || (UserRole.IsMember&&(MemberLevel > 0)&&!MemberGroup.mine.price) || (UserRole.IsMember&&(MemberLevel == 0) &&!CurPackage.wechat.price) || ((!UserRole.IsPact&&!UserRole.IsMember)&&!CurPackage.wechat.price)}">
                    剩余{{room.Remainders}}间
                </p>
                <p class="price">
                    <span class="tag-label">
                        <span v-if="UserRole.IsPact" v-text="[CurPackage.counter>1?'协议均价:':'协议价:']"></span>
                        <span v-if="!UserRole.IsPact&&UserRole.IsMember && MemberLevel > 0" v-text="[CurPackage.counter>1?'会员均价:':'会员价:']"></span>
                        <span v-if="!UserRole.IsPact&&!UserRole.IsMember ||(UserRole.IsMember &&!(MemberLevel > 0))" v-text="[CurPackage.counter>1?'微信均价:':'微信价:']">  </span>
                    </span>
                    <span class="tag-price warn ThemeAuxColor">
                      <span v-if="UserRole.IsPact">
                        <sub v-if="!!CurPackage.pact.price">¥</sub>{{!!CurPackage.pact.price &&
                        CurPackage.pact.price.toFixed(2)||'满'}}
                      </span>
                      <span v-if="!UserRole.IsPact && UserRole.IsMember && MemberLevel > 0">
                        <sub v-if="MemberGroup.mine.price">¥</sub>{{!!MemberGroup.mine.price &&  MemberGroup.mine.price.toFixed(2)||'满'}}
                      </span>
                      <span v-if="!UserRole.IsPact&&!UserRole.IsMember||(UserRole.IsMember &&!(MemberLevel > 0))">
                        <sub v-if="!!CurPackage.wechat.price">¥</sub>{{!!CurPackage.wechat.price &&
                        CurPackage.wechat.price.toFixed(2)||'满'}}
                      </span>
                    </span>
                </p>
                <ul class="tag-group ">
                    <li class="tag-item" v-for="tag in room.tags"><span class="{{getDevice}}">{{tag}}</span></li>
                </ul>
            </div>
        </div>
        <div class="hidden-block">
            <ul class="pack-group flex-block" v-if="!UserRole.IsPact">
                <li class="pack-item ThemeColor" :class="{ active : CurPackage.packageID==pack.packageID}" v-for="pack in room.package" @click="activePackage(room,pack)" v-if="pack.enable">{{pack.packageName}}</li>
            </ul>
            <ul class="price-group">
                <li class="price-item flex-block" v-if="!UserRole.IsPact && !!CurPackage.wechat.price">
                    <div class="price-item-label">
                        <span>微信价</span>
                    </div>
                    <div class="flex-item price-item-content ThemeAuxColor">
                      <span>
                        <sub v-if="!!CurPackage.wechat.price">¥</sub>{{!!CurPackage.wechat.price &&
                        CurPackage.wechat.price.toFixed(2)||'-'}}
                      </span>
                    </div>
                    <div class="price-item-btn">
                        <a class="book-btn" :class="{'disabled':room.Remainders==0||CurPackage.wechat.price==0}" @click="book(room,'weChat')">
                            <span class="btn-role BtnColor">订</span>
                        </a>
                    </div>
                </li>
                <li class="price-item flex-block" v-if="!UserRole.IsPact && !!MemberGroup.mine.price">
                    <div class="price-item-label">会员价</div>
                    <div class="flex-item price-item-content ThemeAuxColor">
                        <sub v-if="!!MemberGroup.mine.price">¥</sub>{{!!MemberGroup.mine.price && MemberGroup.mine.price.toFixed(2)||'-'}}
                    </div>
                    <div class="price-item-btn">
                        <a class="book-btn" :class="{'disabled':room.Remainders==0||MemberGroup.mine.price==0||!MemberGroup.mine.price||MemberGroup.mine.price=='-'}" @click="book(room,'member')">
                            <span class="btn-role BtnColor">
                              <sup>订</sup>
                              <sub class="BtnTextColor">在线支付</sub>
                        </span>
                        </a>
                    </div>
                </li>
                <li class="price-item flex-block" v-if="UserRole.IsPact">
                    <div class="price-item-label">协议价</div>
                    <div class="flex-item price-item-content ThemeAuxColor">
                        <sub v-if="!!CurPackage.pact.price">¥</sub>{{!!CurPackage.pact.price && CurPackage.pact.price.toFixed(2)||'-'}}
                    </div>
                    <div class="price-item-btn">
                        <a class="book-btn" :class="{'disabled':room.Remainders==0||CurPackage.pact.price==0}" @click="book(room,'protocol')">
                            <span class="btn-role BtnColor">订</span>
                        </a>
                    </div>
                </li>
                <li class="price-item-member flex-block" v-if="!UserRole.IsPact && !( MemberLevel == 0)">
                    <div class="flex-item" :class="{ThemeAuxColor:MemberLevel==member.Level}" @click="book(room,'member',member.Level)" v-for="member in MemberGroup.group">
                        <h4>{{member.priceTypeName}}</h4>
                        <p>
                            <sub v-if="!!member.price">¥</sub>{{!!member.price && member.price.toFixed(2)||'-'}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</li>

<!-- 点击图片弹出层 -->
<div class="room-info-container" v-if="showRoomInfo" @click="closePopping()" transition="expand">
</div>
<!-- swiper图片组件 -->
<div class="image-container" v-if="showRoomInfo" transition="expand">
    <p class="close-icon" @click="closeThisRoom()">
        <i class="fa fa-times" aria-hidden="true"></i>
    </p>
    <div class="room-all-info">
        <div class="image-info">
            <swiper class="banner" :images="room.roomImageUrl" :options="swiperOptions"></swiper>
        </div>
        <div class="room-type">
            <h4>{{room.houseTypeName}}</h4>
        </div>
        <div class="room-info">
            <ul class="tag-group ">
                <li class="tag-item" v-for="tag in room.tags"><span class="{{getDevice}}">{{tag}}</span></li>
            </ul>
        </div>
    </div>
</div>
</template>















<script src="./RoomItemScript.js"></script>
