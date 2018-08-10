<template>
  <section>
    <div class="hnn">
      <div class="white-section padding_vertical-0 mobille-no-padding">
        <div class="white-space-aux"></div>
          <div class="container">
            <div class="global-section">
              <div class="global-section__head big">
                <h3 class="h1">My Account</h3>
              </div>
            </div>
            <div class="hnn__faq_module hnn__account padding_vertical-0">
                <div class="row">
                  <div class="column-4 offset-1 text-left tablet-hide">
                    <ul class="hnn__faq_module__left_menu" ref="fixedNavigation" :class="{'fixed': navigationFixed}" :style="{ 'left': fixedNavigationLeftPosition + 'px' }">
                      <li><a href="#" class="link" :class="{'active': (sectionActive === 0)}" @click.prevent="goTo('account')">Account</a></li>
                      <li><a href="#" class="link" :class="{'active': (sectionActive === 1)}" @click.prevent="goTo('profile')">Profile</a></li>
                      <li><a href="#" class="link" :class="{'active': (sectionActive === 2)}" @click.prevent="goTo('payments')">Payments</a></li>
                      <li class="height"></li>
                      <li><a href="mailto:info@herenowliving.com??subject=Looking for help">Help</a></li>
                      <li><a href="#" @click.stop.prevent='logout'>Log Out</a></li>
                    </ul>
                    <div style="height: 100px;"></div>
                  </div>
                  <div class="column-10 offset-5 text-left column-md-12 column-xs-12">
                    <div class="hnn__faq_module__right_content">
                      <div class="hnn__faq_module__right_content__element" id="account">
                          <!-- <h3>Account</h3> -->
                          <div class="row third_special hnn__account__single_row">
                            <div class="column-4 column-md-12 column-xs-12">
                              <p class="color-yellow space_bottom">Account Details</p>
                              <p>{{loggedUser.first_name}} {{loggedUser.last_name}}</p>
                              <p class="space_bottom">{{loggedUser.email}}</p>
                              <p><small>Building / Unit</small></p>
                              <p class="space_bottom">800 Bushwick</p>
                              <!-- <p><small>Since</small></p>
                              <p>August 2018</p> -->
                            </div>
                            <div class="column-4 column-md-12 column-xs-12">
                              <p class="color-yellow space_bottom">Payment Details</p>

                              <p><small>Rent</small></p>
                              <p class="space_bottom">
                                <template v-if="$store.state.stripe.subscriptions && $store.state.stripe.subscriptions.total_count > 0">
                                  {{$store.state.stripe.subscriptions.data[0].plan.amount / 100 | money}} / Month
                                </template>
                                <template v-else>
                                  -
                                </template>
                              </p>

                              <p><small>Next Payment Due</small></p>
                              <p class="space_bottom">
                                <template v-if="$store.state.stripe.subscriptions && $store.state.stripe.subscriptions.total_count > 0">
                                  {{new Date($store.state.stripe.subscriptions.data[0].current_period_end*1000) | moment('MMMM DD, YYYY')}}
                                </template>
                                <template v-else>
                                  -
                                </template>
                              </p>

                              <!-- <p><small>Payment Method</small></p>
                              <p>
                                <template v-if="loggedUser.stripe && loggedUser.stripe.customer">
                                  {{loggedUser.stripe.customer.sources.data[0].brand}} {{loggedUser.stripe.customer.sources.data[0].last4}}
                                </template>
                                <template v-else>
                                  -
                                </template>
                              </p> -->

                            </div>
                            <div class="column-4 column-md-12 column-xs-12">
                              <p class="color-yellow space_bottom">Manage Your Account</p>
                              <div class="hnn__account__single_row__links">
                                <p><a href="mailto:info@herenowliving.com?subject=Maitenence Request">Maitenence Request</a></p>
                                <p><a href="mailto:info@herenowliving.com?subject=Application Status Frequently">Application Status Frequently</a></p>
                                <p><a href="mailto:info@herenowliving.com?subject=I have a question">Asked Questions</a></p>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="hnn__faq_module__right_content__element" id="profile">
                          <!-- <h3>Profile</h3> -->
                          <div class="row third_special hnn__account__single_row">
                            <div class="column-8 column-md-12 column-xs-12">
                              <p class="color-yellow space_bottom">Tenant <small @click="changeTent()" v-text="(changingTenant)? 'Save Changes': 'Edit'"></small></p>
                              <form v-if="changingTenant" class="hnn__form register_style account_form" @submit.prevent="validateTentForm">
                                    <input type="text" v-model="user.name" class="margin-bottom-20">
                                    <input type="text" v-model="user.email" class="margin-bottom-20">
                                    <p class="margin-bottom margin-top-40"><small>Cell</small></p>
                                    <input type="text" v-model="user.cel">
                              </form>
                              <template v-else>
                                <p>
                                  {{loggedUser.first_name}} {{loggedUser.last_name}}
                                </p>
                                <p class="space_bottom">
                                  {{loggedUser.email}}
                                </p>
                                <p><small>Cell</small></p>
                                <p class="space_bottom">
                                  {{loggedUser.phone}}
                                </p>
                                <!-- <p><small>Linked Accounts</small></p>
                                <p>Facebook</p> -->
                              </template>
                            </div>
                            <div class="column-4 column-md-12 column-xs-12">
                              <div v-if="loadingAvatar" class="loading">
                                <Loading />
                              </div>
                              <div v-else class="hnn__account__single_row__avatar ab-file-input-wrapper">
                                <img :src="this.loggedUser.avatar" v-if="this.loggedUser && this.loggedUser.avatar">
                                <input type="file" name="" ref="avatarInput" @change="changeAvatar">
                              </div>
                              <p class="fake_link" @click="uploadProfilePic">Change Profile Photo</p>
                            </div>
                          </div>
                          <div class="row third_special hnn__account__single_row margin-top-40">
                            <div class="column-12">
                              <p class="color-yellow space_bottom">Emergency Contact <small @click="changeEmergency()" v-text="(changingEmergency)? 'Save Changes': 'Edit'"></small></p>
                              <form v-if="changingEmergency" class="hnn__form register_style account_form" @submit.prevent="validateTentEmergency">
                                    <input type="text" v-model="emergency.name" class="margin-bottom-20" placeholder="Name">
                                    <input type="text" v-model="emergency.email" class="margin-bottom-20" placeholder="Email">
                                    <p class="margin-bottom margin-top-40"><small>Address</small></p>
                                    <input type="text" v-model="emergency.address" placeholder="Address">
                                    <p class="margin-bottom margin-top-40"><small>Cell</small></p>
                                    <input type="text" v-model="emergency.cel" placeholder="Phone number">
                              </form>
                              <template v-else>
                                <template v-if="loggedUser.payload && loggedUser.payload.emergency">
                                  <p v-if="loggedUser.payload.emergency.name" v-text="loggedUser.payload.emergency.name"></p>
                                  <p v-if="loggedUser.payload.emergency.email" class="space_bottom" v-text="loggedUser.payload.emergency.email"></p>
                                  <template v-if="loggedUser.payload.emergency.address">
                                    <p><small>Current Address</small></p>
                                    <p class="space_bottom" v-text="loggedUser.payload.emergency.address"></p>
                                  </template>
                                  <template v-if="loggedUser.payload.emergency.cel">
                                    <p><small>Cell</small></p>
                                    <p class="space_bottom" v-text="loggedUser.payload.emergency.cel"></p>
                                  </template>
                                </template>
                              </template>
                            </div>
                          </div>
                      </div>
                      <div class="hnn__faq_module__right_content__element" id="payments">

                        <div class="hnn__accordion">
                            <div class="hnn__accordion__single" :class="{ 'opened': (accordionActualCard === 0) }">
                                <p class="hnn__accordion__single__title" @click="changeCard(0)">
                                  <strong>Payment History</strong>
                                </p>
                                <div class="hnn__accordion__single__description">
                                  <div class="hnn__membership__table__wrapper clean">
                                    <template v-if="$store.state.stripe.charges"> <!-- && $store.state.stripe.charges.data.length > 0 -->
                                      <table>
                                        <thead>
                                          <tr>
                                            <th>Date</th>
                                            <th>Period</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Method</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr v-for="s in $store.state.stripe.charges.data" :key="s.id">
                                            <td><a href="#">{{new Date(s.created*1000) | moment('L') }}</a></td>
                                            <td>{{new Date(s.created*1000) | moment('MMMM') }} Rent</td>
                                            <td>{{s.amount / 100 | money}}</td>
                                            <td>{{s.status | humanize}}</td>
                                            <td>{{s.source.brand}} {{s.source.last4}}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </template>
                                    <template>
                                      There are no payments yet
                                    </template>
                                  </div>
                                </div>
                                <img class="hnn__accordion__single__arrow" src="~/static/images/icons/arrow-up.svg" alt="Arrow">
                            </div>
                            <div class="hnn__accordion__single" :class="{ 'opened': (accordionActualCard === 1) }">
                                <p class="hnn__accordion__single__title" @click="changeCard(1)"><strong>Payment Details</strong> </p>
                                <div class="hnn__accordion__single__description">
                                  <div class="hnn__membership__table__wrapper clean">
                                    <table v-if="$store.state.stripe.subscriptions">
                                      <thead>
                                        <tr>
                                          <th>Rent</th>
                                          <th>Last Payment</th>
                                          <th>Next Payment Due</th>
                                          <th>Payment Method</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <template v-if="loggedUser.stripe && loggedUser.stripe.customer && $store.state.stripe.subscriptions.total_count > 0">
                                          <tr v-for="s in $store.state.stripe.subscriptions.data" :key="s.id">
                                            <td>{{s.plan.amount / 100 | money}}/Month</td>
                                            <td>{{new Date(s.current_period_start*1000) | moment('L')}}</td>
                                            <td>{{new Date(s.current_period_end*1000) | moment('L')}}</td>
                                            <td>
                                              {{loggedUser.stripe.customer.sources.data[0].brand}} {{loggedUser.stripe.customer.sources.data[0].last4}}
                                            </td>
                                          </tr>
                                        </template>
                                        <template v-else>
                                          <tr>
                                            <td>$1400/Month</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                              <span class="span__underline" v-if="!(loggedUser.stripe && loggedUser.stripe.customer)" @click="openDialog(0)">Add Payment Method</span>
                                              <span v-else>
                                                {{loggedUser.stripe.customer.sources.data[0].brand}} {{loggedUser.stripe.customer.sources.data[0].last4}}
                                              </span>
                                            </td>
                                          </tr>
                                        </template>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <img class="hnn__accordion__single__arrow" src="~/static/images/icons/arrow-up.svg" alt="Arrow">
                            </div>
                            <!-- <div class="hnn__accordion__single" :class="{ 'opened': (accordionActualCard === 2) }">
                                <p class="hnn__accordion__single__title" @click="changeCard(2)"><strong>Documents</strong> </p>
                                <div class="hnn__accordion__single__description">
                                  <div class="hnn__membership__table__wrapper clean"> <table> <tbody> <tr> <td><p><a href="#">Signed Lease</a></p></td> </tr> <tr><td><p><a href="#">Events Calendar</a></p></td> </tr> <tr> <td><p><a href="#">Invoice History</a></p></td> </tr> </tbody> </table></div>
                                </div>
                                <img class="hnn__accordion__single__arrow" src="~/static/images/icons/arrow-up.svg" alt="Arrow">
                            </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>


    <div class="hnn__fancy" :class="{ active: creditCardFancy }">
      <div class="hnn__fancy__content">
        <div class="hnn__fancy__content__head">
          <div class="hnn__fancy__content__head__title">
            Add Payment Method
          </div>
          <div class="hnn__fancy__content__head__close" @click="openDialog"></div>
        </div>
        <div class="hnn__fancy__content__body">
          <div class="hnn__fancy__content__body__title">
            Card Information
          </div>
          <div class="hnn__fancy__content__body__inputs">
            <input type="text" class="hnn__fancy__content__body__inputs__full" v-model="creditCard.name" placeholder="Name on Card" required="required">
            <div class="hnn__fancy__content__body__inputs__full credit_card">
              <div class="credit_card__icon">
                <svg v-if="creditCardType === 'Visa'" class="icon" viewBox="0 0 1638 1024">
                  <use xlink:href="#visa">
                    <svg class="icon" id="visa" viewBox="0 0 1638 1024" width="100%" height="100%">
              				<title>visa</title>
              				<path class="path1" d="M0 92.16h1638.4v819.2h-1638.4v-819.2z"></path>
              				<path class="blue" d="M1622.016 0c-92.16 0-1125.376 0-1619.968 0-1.024 0-2.048 1.024-2.048 2.048v202.752h1753.088c0 0 0 190.464 0-81.92 0-81.92-43.008-122.88-131.072-122.88z"></path>
              				<path class="orange" d="M0 819.2c0 0 0 0 0 204.8 0 0 0 0 0 0h1638.4c0 0 0 0 0 0v-204.8h-1638.4z"></path>
              				<path class="blue" d="M1142.784 305.152c-22.528-9.216-59.392-18.432-103.424-18.432-114.688 0-195.584 59.392-195.584 143.36-1.024 62.464 57.344 97.28 101.376 117.76 45.056 21.504 60.416 34.816 60.416 54.272 0 28.672-35.84 41.984-69.632 41.984-46.080 0-70.656-6.144-109.568-22.528l-15.36-7.168-16.384 97.28c26.624 12.288 76.8 22.528 129.024 23.552 121.856 0 200.704-58.368 201.728-148.48 0-49.152-30.72-87.040-97.28-117.76-40.96-20.48-65.536-33.792-65.536-54.272 0-18.432 21.504-36.864 66.56-36.864 37.888-1.024 65.536 8.192 87.040 16.384l10.24 5.12 16.384-94.208z"></path>
              				<path class="blue" d="M1439.744 294.912h-89.088c-27.648 0-48.128 8.192-60.416 35.84l-172.032 398.336h120.832c0 0 19.456-53.248 24.576-65.536 13.312 0 131.072 0 148.48 0 3.072 15.36 14.336 65.536 14.336 65.536h107.52l-94.208-434.176zM1297.408 574.464c9.216-24.576 46.080-121.856 46.080-121.856-1.024 1.024 9.216-25.6 15.36-40.96l8.192 37.888c0 0 22.528 103.424 26.624 125.952l-96.256-1.024z"></path>
              				<path class="blue" d="M606.208 729.088l72.704-434.176h115.712l-72.704 434.176h-115.712z"></path>
              				<path class="blue" d="M509.952 294.912l-113.664 295.936-12.288-60.416c-21.504-69.632-87.040-144.384-160.768-182.272l104.448 379.904h122.88l182.272-433.152h-122.88z"></path>
              				<path class="orange" d="M290.816 293.888h-187.392l-1.024 9.216c145.408 35.84 241.664 122.88 281.6 227.328l-40.96-199.68c-7.168-27.648-26.624-35.84-52.224-36.864z"></path>
              			</svg>
                  </use>
                </svg>
                <svg v-else-if="creditCardType === 'Mastercard'" class="icon fill" viewBox="0 0 1638 1024">
                  <use xlink:href="#mastercard">
                    <svg id="mastercard" viewBox="0 0 1638 1024" width="100%" height="100%">
            				<title>mastercard</title>
            				<path class="path1" d="M1530.88 517.12c0 237.568-190.464 431.104-425.984 431.104s-425.984-192.512-425.984-431.104v0c0-237.568 190.464-431.104 425.984-431.104s425.984 192.512 425.984 431.104v0c0 0 0 0 0 0v0 0z"></path>
            				<path class="path2" d="M530.432 86.016c-233.472 2.048-422.912 194.56-422.912 431.104 0 237.568 190.464 431.104 425.984 431.104 110.592 0 210.944-43.008 286.72-112.64 0 0 0 0 0 0v0c15.36-14.336 29.696-29.696 43.008-46.080h-87.040c-11.264-14.336-22.528-28.672-31.744-44.032h150.528c9.216-14.336 17.408-29.696 24.576-46.080h-199.68c-7.168-14.336-12.288-29.696-17.408-45.056h235.52c14.336-43.008 21.504-89.088 21.504-136.192 0-31.744-3.072-62.464-10.24-92.16h-260.096c3.072-15.36 7.168-30.72 12.288-45.056h235.52c-5.12-15.36-11.264-30.72-18.432-46.080h-198.656c7.168-15.36 15.36-30.72 24.576-45.056h150.528c-10.24-16.384-21.504-31.744-32.768-46.080h-83.968c13.312-15.36 27.648-29.696 43.008-43.008-75.776-69.632-176.128-112.64-286.72-112.64-2.048-2.048-3.072-2.048-4.096-2.048 0 0 1.024 0 0 0v0 0z"></path>
            				<path class="path3" d="M686.080 626.688l6.144-38.912c-3.072 0-7.168 1.024-11.264 1.024-15.36 0-17.408-8.192-16.384-14.336l12.288-79.872h23.552l6.144-43.008h-22.528l5.12-26.624h-45.056c-1.024 1.024-26.624 150.528-26.624 168.96 0 26.624 15.36 38.912 35.84 38.912 15.36 0 28.672-5.12 32.768-6.144 0 0-4.096 1.024 0 0v0 0z"></path>
            				<path class="path4" d="M701.44 552.96c0 64.512 41.984 79.872 78.848 79.872 33.792 0 48.128-7.168 48.128-7.168l8.192-44.032c0 0-25.6 11.264-48.128 11.264-49.152 0-39.936-36.864-39.936-36.864h92.16c0 0 6.144-29.696 6.144-41.984 0-30.72-15.36-66.56-64.512-66.56-47.104-1.024-80.896 49.152-80.896 105.472 0 0 0-56.32 0 0v0 0zM780.288 487.424c25.6 0 20.48 28.672 20.48 31.744h-50.176c0-3.072 5.12-31.744 29.696-31.744 0 0-24.576 0 0 0v0 0z"></path>
            				<path class="path5" d="M1068.032 626.688l8.192-50.176c0 0-22.528 11.264-37.888 11.264-31.744 0-45.056-24.576-45.056-51.2 0-54.272 27.648-83.968 58.368-83.968 23.552 0 41.984 13.312 41.984 13.312l7.168-48.128c0 0-27.648-11.264-51.2-11.264-52.224 0-103.424 46.080-103.424 132.096 0 57.344 27.648 95.232 81.92 95.232 15.36-1.024 39.936-7.168 39.936-7.168v0 0 0z"></path>
            				<path class="path6" d="M437.248 447.488c-30.72 0-55.296 10.24-55.296 10.24l-6.144 39.936c0 0 19.456-8.192 49.152-8.192 17.408 0 29.696 2.048 29.696 15.36 0 8.192-1.024 11.264-1.024 11.264s-13.312-1.024-19.456-1.024c-38.912 0-80.896 17.408-80.896 67.584 0 39.936 26.624 49.152 44.032 49.152 31.744 0 46.080-21.504 46.080-21.504l-1.024 17.408h38.912l17.408-125.952c1.024-52.224-46.080-54.272-61.44-54.272v0 0 0zM446.464 549.888c1.024 8.192-5.12 44.032-31.744 44.032-14.336 0-17.408-11.264-17.408-17.408 0-12.288 7.168-27.648 39.936-27.648 7.168 0 8.192 1.024 9.216 1.024 0 0-1.024 0 0 0v0 0z"></path>
            				<path class="path7" d="M541.696 631.808c10.24 0 68.608 3.072 68.608-58.368 0-57.344-54.272-46.080-54.272-68.608 0-11.264 9.216-15.36 24.576-15.36 6.144 0 30.72 2.048 30.72 2.048l6.144-40.96c0 0-16.384-4.096-41.984-4.096-33.792 0-67.584 13.312-67.584 59.392 0 52.224 56.32 47.104 56.32 69.632 0 14.336-16.384 16.384-27.648 16.384-21.504 0-39.936-7.168-39.936-7.168l-6.144 39.936c1.024 2.048 13.312 7.168 51.2 7.168 0 0-37.888 0 0 0v0 0z"></path>
            				<path class="path8" d="M1443.84 410.624l-10.24 61.44c0 0-17.408-23.552-44.032-23.552-41.984 0-75.776 50.176-75.776 108.544 0 37.888 18.432 74.752 56.32 74.752 27.648 0 41.984-19.456 41.984-19.456l-2.048 16.384h44.032l34.816-218.112h-45.056zM1422.336 530.432c0 24.576-12.288 56.32-36.864 56.32-16.384 0-23.552-14.336-23.552-35.84 0-35.84 15.36-59.392 35.84-59.392 16.384 1.024 24.576 12.288 24.576 38.912 0 0 0-26.624 0 0v0 0z"></path>
            				<path class="path9" d="M191.488 628.736l27.648-164.864 4.096 164.864h31.744l58.368-164.864-26.624 164.864h46.080l35.84-218.112h-71.68l-45.056 134.144-2.048-134.144h-66.56l-35.84 218.112h44.032z"></path>
            				<path class="path10" d="M890.88 629.76c13.312-75.776 15.36-137.216 47.104-125.952 5.12-29.696 11.264-40.96 16.384-53.248 0 0-3.072-1.024-9.216-1.024-20.48 0-35.84 27.648-35.84 27.648l4.096-25.6h-41.984l-28.672 178.176h48.128z"></path>
            				<path class="path11" d="M1172.48 447.488c-30.72 0-55.296 10.24-55.296 10.24l-6.144 39.936c0 0 19.456-8.192 49.152-8.192 17.408 0 29.696 2.048 29.696 15.36 0 8.192-1.024 11.264-1.024 11.264s-13.312-1.024-19.456-1.024c-38.912 0-80.896 17.408-80.896 67.584 0 39.936 26.624 49.152 44.032 49.152 31.744 0 46.080-21.504 46.080-21.504l-1.024 17.408h39.936l17.408-125.952c0-52.224-46.080-54.272-62.464-54.272v0 0 0zM1182.72 549.888c1.024 8.192-5.12 44.032-31.744 44.032-14.336 0-17.408-11.264-17.408-17.408 0-12.288 7.168-27.648 39.936-27.648 7.168 0 7.168 1.024 9.216 1.024 0 0-2.048 0 0 0v0 0z"></path>
            				<path class="path12" d="M1271.808 629.76c13.312-75.776 15.36-137.216 47.104-125.952 5.12-29.696 11.264-40.96 16.384-53.248 0 0-3.072-1.024-9.216-1.024-20.48 0-35.84 27.648-35.84 27.648l4.096-25.6h-41.984l-28.672 178.176h48.128z"></path>
            			</svg>
                  </use>
                </svg>
                <svg v-else-if="creditCardType === 'AMEX'" class="icon" viewBox="0 0 1638 1024">
                  <use xlink:href="#amex">
                    <svg id="amex" viewBox="0 0 1638 1024" width="100%" height="100%">
            				<title>amex</title>
            				<path class="path1" d="M1515.52 0c-81.92 0-949.24 0-1433.6 0-40.96 0-81.92 40.96-81.92 81.92v819.2c0 81.92 40.96 122.88 122.88 122.88 456.942 0 1310.72 0 1392.64 0s122.88-40.96 122.88-122.88v-778.24c0-81.92-40.96-122.88-122.88-122.88z"></path>
            				<path class="path2" d="M138.443 375.043l-31.732-77.322-31.55 77.322h63.282zM837.484 344.254c-6.371 3.867-13.906 3.996-22.933 3.996h-56.32v-43.081h57.086c8.079 0 16.509 0.363 21.985 3.498 6.014 2.826 9.735 8.84 9.735 17.147 0 8.477-3.539 15.298-9.553 18.44 0 0 6.014-3.142 0 0v0 0zM1239.265 375.043l-32.083-77.322-31.907 77.322h63.99zM490.321 458.737h-47.527l-0.176-151.907-67.225 151.907h-40.706l-67.4-152.041v152.041h-94.294l-17.814-43.262h-96.528l-17.995 43.262h-50.353l83.020-193.958h68.88l78.849 183.638v-183.638h75.667l60.673 131.577 55.735-131.577h77.188v193.958h0.006zM679.745 458.737h-154.873v-193.958h154.873v40.39h-108.51v34.961h105.906v39.758h-105.906v38.734h108.51v40.115zM898.11 317.015c0 30.924-20.64 46.901-32.668 51.698 10.144 3.861 18.808 10.682 22.933 16.334 6.546 9.647 7.675 18.264 7.675 35.587v38.102h-46.761l-0.176-24.46c0-11.671 1.117-28.455-7.319-37.786-6.775-6.821-17.1-8.301-33.791-8.301h-49.768v70.548h-46.357v-193.958h106.632c23.693 0 41.15 0.626 56.139 9.29 14.666 8.664 23.459 21.312 23.459 42.946 0 0 0-21.634 0 0v0 0zM972.302 458.737h-47.305v-193.958h47.305v193.958zM1521.099 458.737h-65.698l-87.876-145.577v145.577h-94.417l-18.042-43.262h-96.306l-17.504 43.262h-54.249c-22.535 0-51.066-4.984-67.225-21.453-16.293-16.468-24.77-38.775-24.77-74.046 0-28.765 5.066-55.062 24.992-75.842 14.988-15.48 38.459-22.617 70.407-22.617h44.883v41.56h-43.941c-16.919 0-26.472 2.516-35.675 11.49-7.904 8.167-13.327 23.606-13.327 43.935 0 20.78 4.13 35.762 12.748 45.55 7.137 7.675 20.107 10.004 32.311 10.004h20.821l65.341-152.532h69.465l78.492 183.457v-183.457h70.589l81.493 135.081v-135.081h47.486v193.952zM-10.234 496.833h79.212l17.861-43.081h39.986l17.814 43.081h155.855v-32.937l13.912 33.077h80.908l13.912-33.568v33.428h387.331l-0.181-70.717h7.494c5.248 0.181 6.78 0.667 6.78 9.331v61.386h200.329v-16.462c16.158 8.658 41.291 16.462 74.362 16.462h84.278l18.036-43.081h39.986l17.638 43.081h162.408v-40.922l24.594 40.922h130.144v-270.514h-128.798v31.948l-18.036-31.948h-132.162v31.948l-16.562-31.948h-178.519c-29.883 0-56.15 4.171-77.369 15.796v-15.796h-123.194v15.796c-13.502-11.981-31.901-15.796-52.359-15.796h-450.074l-30.199 69.869-31.012-69.869h-141.762v31.948l-15.573-31.948h-120.9l-56.144 128.617v141.897h0.006zM1638.805 639.66h-84.495c-8.436 0-14.040 0.316-18.762 3.504-4.891 3.142-6.775 7.804-6.775 13.959 0 7.319 4.13 12.297 10.138 14.45 4.891 1.702 10.144 2.2 17.867 2.2l25.127 0.673c25.355 0.626 42.279 4.984 52.599 15.614 1.878 1.48 3.007 3.142 4.3 4.803v-55.203zM1638.805 767.563c-11.262 16.468-33.206 24.817-62.913 24.817h-89.532v-41.601h89.169c8.846 0 15.035-1.164 18.762-4.803 3.229-3.001 5.482-7.36 5.482-12.654 0-5.651-2.252-10.138-5.663-12.83-3.364-2.96-8.26-4.306-16.334-4.306-43.531-1.48-97.839 1.346-97.839-60.047 0-28.14 17.867-57.759 66.517-57.759h92.346v-38.6h-85.799c-25.893 0-44.701 6.201-58.022 15.842v-15.842h-126.909c-20.294 0-44.116 5.031-55.384 15.842v-15.842h-226.625v15.842c-18.036-13.011-48.469-15.842-62.515-15.842h-149.485v15.842c-14.269-13.818-46-15.842-65.341-15.842h-167.298l-38.284 41.431-35.856-41.431h-249.909v270.701h245.206l39.448-42.086 37.161 42.086 151.146 0.135v-63.68h14.86c20.055 0.31 43.707-0.497 64.575-9.518v73.057h124.668v-70.554h6.014c7.675 0 8.43 0.316 8.43 7.986v62.562h378.719c24.044 0 49.177-6.154 63.094-17.322v17.322h120.128c24.998 0 49.411-3.504 67.985-12.478v-50.429zM1453.874 690.060c9.027 9.343 13.865 21.137 13.865 41.104 0 41.735-26.074 61.217-72.829 61.217h-90.298v-41.601h89.935c8.793 0 15.029-1.164 18.937-4.803 3.188-3.001 5.476-7.36 5.476-12.654 0-5.651-2.475-10.138-5.657-12.83-3.545-2.96-8.436-4.306-16.509-4.306-43.356-1.48-97.652 1.346-97.652-60.047 0-28.14 17.679-57.759 66.283-57.759h92.942v41.291h-85.044c-8.43 0-13.912 0.316-18.574 3.504-5.078 3.142-6.962 7.804-6.962 13.959 0 7.319 4.312 12.297 10.144 14.45 4.891 1.702 10.144 2.2 18.042 2.2l24.957 0.673c25.168 0.614 42.443 4.967 52.944 15.603 0 0-10.501-10.636 0 0v0 0zM1035.537 678.078c-6.201 3.68-13.871 3.996-22.892 3.996h-56.32v-43.572h57.086c8.255 0 16.515 0.176 22.125 3.504 6.008 3.142 9.6 9.15 9.6 17.451s-3.592 14.988-9.6 18.621c0 0 6.008-3.633 0 0v0 0zM1063.536 702.222c10.32 3.808 18.756 10.636 22.711 16.287 6.546 9.471 7.494 18.311 7.681 35.411v38.459h-46.544v-24.273c0-11.671 1.123-28.953-7.494-37.974-6.775-6.95-17.1-8.612-34.013-8.612h-49.545v70.858h-46.585v-194.005h107.035c23.471 0 40.565 1.035 55.782 9.156 14.631 8.84 23.834 20.95 23.834 43.081-0.006 30.965-20.657 46.767-32.861 51.611 0 0 12.204-4.844 0 0v0 0zM1122.103 598.375h154.732v40.121h-108.562v35.271h105.912v39.583h-105.912v38.6l108.562 0.176v40.255h-154.732v-194.005zM809.31 687.907h-59.912v-49.405h60.45c16.737 0 28.356 6.821 28.356 23.787 0 16.778-11.080 25.618-28.894 25.618v0 0 0zM703.222 774.736l-71.179-79.025 71.179-76.515v155.539zM519.403 751.949h-113.985v-38.6h101.782v-39.583h-101.782v-35.271h116.232l50.71 56.536-52.956 56.917zM887.978 662.289c0 53.892-40.208 65.019-80.733 65.019h-57.847v65.072h-90.111l-57.086-64.224-59.327 64.224h-183.638v-194.005h186.464l57.040 63.592 58.97-63.592h148.139c36.792 0 78.13 10.185 78.13 63.914 0 0 0-53.728 0 0v0 0z"></path>
            			</svg>
                  </use>
                </svg>
                <svg v-else-if="creditCardType === 'Discover'" class="icon" viewBox="0 0 1638 1024">
                  <use xlink:href="#discover">
                    <svg id="discover" viewBox="0 0 1638 1024" width="100%" height="100%">
            				<title>discover</title>
            				<path class="path1" d="M1515.52 0c-81.92 0-949.248 0-1433.6 0-40.96 0-81.92 40.96-81.92 81.92v819.2c0 81.92 40.96 122.88 122.88 122.88 456.704 0 1310.72 0 1392.64 0s122.88-40.96 122.88-122.88v-778.24c0-81.92-40.96-122.88-122.88-122.88z"></path>
            				<path class="orange" d="M506.88 1024c440.32 0 946.176 0 1008.64 0 81.92 0 122.88-40.96 122.88-122.88v-487.424c0 0-243.712 430.080-1131.52 610.304z"></path>
            				<path class="slate" d="M532.48 500.736h14.336l46.080 67.584v-67.584h11.264v82.944h-14.336l-46.080-67.584v67.584h-11.264v-82.944zM625.664 500.736h53.248v10.24h-41.984v24.576h38.912v10.24h-38.912v27.648h44.032v10.24h-55.296v-82.944zM714.752 510.976h-26.624v-10.24h64.512v10.24h-26.624v72.704h-11.264v-72.704zM753.664 500.736h11.264l18.432 66.56 19.456-66.56h13.312l19.456 66.56 18.432-66.56h11.264l-23.552 82.944h-12.288l-20.48-67.584-20.48 67.584h-10.24l-24.576-82.944zM914.432 585.728c-6.144 0-12.288-1.024-17.408-3.072s-10.24-5.12-13.312-9.216c-4.096-4.096-7.168-8.192-9.216-13.312s-3.072-11.264-3.072-17.408 1.024-12.288 3.072-17.408c2.048-5.12 5.12-10.24 9.216-13.312 4.096-4.096 8.192-7.168 13.312-9.216s11.264-3.072 17.408-3.072 12.288 1.024 17.408 3.072c5.12 2.048 10.24 5.12 13.312 9.216 4.096 4.096 7.168 8.192 9.216 13.312s3.072 11.264 3.072 17.408-1.024 12.288-3.072 17.408c-2.048 5.12-5.12 10.24-9.216 13.312-4.096 4.096-8.192 7.168-13.312 9.216s-11.264 3.072-17.408 3.072zM914.432 575.488c5.12 0 9.216-1.024 13.312-3.072s7.168-4.096 10.24-7.168c3.072-3.072 5.12-6.144 6.144-10.24s2.048-8.192 2.048-12.288-1.024-9.216-2.048-12.288-3.072-7.168-6.144-10.24-6.144-5.12-10.24-7.168c-4.096-2.048-8.192-3.072-13.312-3.072s-9.216 1.024-13.312 3.072c-4.096 2.048-7.168 4.096-10.24 7.168s-5.12 6.144-6.144 10.24c-1.024 4.096-2.048 8.192-2.048 12.288s1.024 9.216 2.048 12.288c1.024 4.096 3.072 7.168 6.144 10.24s6.144 5.12 10.24 7.168 9.216 3.072 13.312 3.072c0 0-4.096 0 0 0zM973.824 500.736h29.696c5.12 0 9.216 1.024 13.312 2.048s6.144 3.072 8.192 5.12 3.072 5.12 4.096 7.168c1.024 3.072 1.024 5.12 1.024 8.192s0 5.12-1.024 7.168c-1.024 2.048-2.048 5.12-4.096 7.168s-4.096 4.096-6.144 5.12c-2.048 1.024-5.12 2.048-8.192 2.048l23.552 37.888h-14.336l-21.504-36.864h-12.288v37.888h-11.264v-82.944zM985.088 537.6h14.336c2.048 0 4.096 0 6.144-1.024 2.048 0 4.096-1.024 6.144-2.048s3.072-2.048 4.096-4.096c1.024-2.048 1.024-4.096 1.024-7.168s0-5.12-1.024-7.168c-1.024-2.048-2.048-3.072-4.096-4.096s-3.072-2.048-6.144-2.048c-2.048 0-4.096-1.024-6.144-1.024h-14.336v28.672zM1045.504 500.736h11.264v35.84h1.024l36.864-35.84h15.36l-39.936 37.888 43.008 44.032h-17.408l-38.912-40.96h-1.024v40.96h-11.264v-81.92z"></path>
            				<path class="slate" d="M144.384 244.736h76.8c13.312 0 25.6 2.048 36.864 6.144 12.288 4.096 22.528 10.24 31.744 18.432s16.384 18.432 22.528 30.72 8.192 26.624 8.192 43.008c0 16.384-3.072 31.744-9.216 44.032s-14.336 22.528-24.576 30.72c-10.24 8.192-21.504 14.336-33.792 18.432s-24.576 6.144-35.84 6.144h-72.704v-197.632zM205.824 408.576c11.264 0 21.504-1.024 30.72-4.096 9.216-2.048 18.432-6.144 25.6-11.264s13.312-12.288 17.408-20.48 6.144-18.432 6.144-30.72c0-12.288-2.048-21.504-5.12-30.72-4.096-8.192-9.216-15.36-15.36-20.48s-14.336-9.216-23.552-11.264c-9.216-2.048-18.432-4.096-29.696-4.096h-31.744v133.12h25.6zM353.28 244.736h34.816v195.584h-34.816v-195.584zM527.36 286.72c-4.096-5.12-8.192-9.216-14.336-11.264s-12.288-4.096-19.456-4.096c-4.096 0-8.192 0-11.264 1.024-4.096 1.024-7.168 2.048-10.24 4.096s-5.12 5.12-7.168 8.192-4.096 7.168-4.096 11.264c0 6.144 2.048 11.264 7.168 15.36 5.12 3.072 10.24 6.144 17.408 9.216s14.336 5.12 22.528 7.168c8.192 2.048 15.36 6.144 22.528 10.24s12.288 10.24 17.408 16.384c5.12 7.168 7.168 16.384 7.168 27.648 0 10.24-2.048 19.456-6.144 27.648s-10.24 15.36-16.384 20.48-14.336 9.216-22.528 11.264c-8.192 3.072-17.408 4.096-27.648 4.096-12.288 0-23.552-2.048-34.816-6.144s-20.48-11.264-28.672-20.48l26.624-25.6c4.096 6.144 10.24 11.264 16.384 15.36s14.336 5.12 21.504 5.12c4.096 0 8.192-1.024 12.288-2.048s8.192-3.072 11.264-5.12c3.072-2.048 6.144-5.12 8.192-8.192s3.072-7.168 3.072-11.264c0-7.168-2.048-12.288-7.168-16.384s-10.24-7.168-17.408-10.24-14.336-5.12-22.528-7.168-15.36-6.144-22.528-10.24c-7.168-4.096-12.288-9.216-17.408-16.384s-7.168-16.384-7.168-27.648c0-10.24 2.048-18.432 6.144-26.624 4.096-7.168 9.216-13.312 16.384-18.432s14.336-8.192 23.552-11.264 17.408-4.096 26.624-4.096c10.24 0 20.48 2.048 29.696 5.12s18.432 8.192 26.624 15.36c0 0-8.192-7.168 0 0l-25.6 27.648zM724.992 290.816c-7.168-8.192-14.336-13.312-20.48-15.36-7.168-3.072-13.312-4.096-20.48-4.096-10.24 0-19.456 2.048-27.648 5.12s-15.36 8.192-21.504 15.36c-6.144 6.144-10.24 13.312-13.312 22.528-3.072 8.192-5.12 17.408-5.12 27.648s2.048 20.48 5.12 28.672c3.072 9.216 8.192 16.384 13.312 22.528 6.144 6.144 13.312 11.264 21.504 15.36s17.408 5.12 27.648 5.12c8.192 0 15.36-2.048 23.552-6.144s14.336-10.24 20.48-18.432l28.672 20.48c-9.216 12.288-19.456 21.504-32.768 26.624-12.288 5.12-26.624 8.192-40.96 8.192-15.36 0-28.672-2.048-41.984-7.168s-23.552-12.288-32.768-20.48c-9.216-9.216-16.384-19.456-21.504-31.744s-8.192-26.624-8.192-41.984c0-15.36 3.072-29.696 8.192-43.008s12.288-23.552 21.504-32.768c9.216-9.216 20.48-16.384 32.768-20.48 12.288-5.12 26.624-7.168 41.984-7.168 13.312 0 25.6 2.048 36.864 7.168s21.504 12.288 31.744 23.552c0 0-10.24-11.264 0 0l-26.624 20.48zM987.136 244.736h39.936l53.248 147.456 55.296-147.456h37.888l-78.848 195.584h-29.696l-77.824-195.584zM1193.984 244.736h130.048v31.744h-95.232v48.128h90.112v31.744h-90.112v53.248h99.328v30.72h-134.144v-195.584zM1362.944 244.736h67.584c9.216 0 18.432 1.024 27.648 3.072s16.384 5.12 23.552 9.216c7.168 4.096 12.288 10.24 16.384 17.408s6.144 16.384 6.144 27.648c0 14.336-4.096 25.6-11.264 35.84-8.192 9.216-19.456 15.36-33.792 17.408l52.224 87.040h-41.984l-45.056-82.944h-25.6v80.896h-34.816v-195.584zM1425.408 327.68c5.12 0 10.24 0 15.36-1.024 5.12 0 9.216-2.048 13.312-3.072 4.096-2.048 7.168-4.096 10.24-8.192s4.096-8.192 4.096-15.36c0-6.144-1.024-10.24-4.096-13.312-2.048-3.072-5.12-6.144-9.216-8.192s-8.192-3.072-13.312-3.072c-5.12-1.024-9.216-1.024-13.312-1.024h-29.696v53.248h26.624z"></path>
            				<path class="orange" d="M983.040 343.040c0 56.554-45.846 102.4-102.4 102.4s-102.4-45.846-102.4-102.4c0-56.554 45.846-102.4 102.4-102.4s102.4 45.846 102.4 102.4z"></path>
            				<path class="path6" d="M953.344 345.088c0 39.588-32.092 71.68-71.68 71.68s-71.68-32.092-71.68-71.68c0-39.588 32.092-71.68 71.68-71.68s71.68 32.092 71.68 71.68z"></path>
            			</svg>
                  </use>
                </svg>
              </div>
              <input type="text" v-model="creditCard.number" placeholder="Card Number" maxlength="16" @keyup="getCardType(creditCard.number)" @keypress="isNumber($event)" required="required">
            </div>

            <input type="text" class="hnn__fancy__content__body__inputs__small" v-model="creditCard.month" placeholder="MM" maxlength="2" v-on:keypress="isNumber($event)" required="required">
            <input type="text" class="hnn__fancy__content__body__inputs__small" v-model="creditCard.year" placeholder="YY" maxlength="2" v-on:keypress="isNumber($event)" required="required">
            <input type="text" class="hnn__fancy__content__body__inputs__medium" v-model="creditCard.cvv" placeholder="CVV/CVC" maxlength="4" v-on:keypress="isNumber($event)" required="required">
          </div>
        </div>
        <div class="hnn__fancy__content__body">
          <div class="hnn__fancy__content__body__title">
            Billing Address
          </div>
          <div class="hnn__fancy__content__body__inputs">
            <input type="text" class="hnn__fancy__content__body__inputs__full" v-model="billing.address" placeholder="Address" required="required">
            <input type="text" class="hnn__fancy__content__body__inputs__full" v-model="billing.suite" placeholder="Suite/Apt" required="required">
            <input type="text" class="hnn__fancy__content__body__inputs__full" v-model="billing.city" placeholder="City" required="required">
            <div class="hnn__fancy__content__body__inputs__medium select_element">
              <select class="" v-model="billing.state" placeholder="State" required="required">
              	<option value="AL">Alabama</option>
              	<option value="AK">Alaska</option>
              	<option value="AZ">Arizona</option>
              	<option value="AR">Arkansas</option>
              	<option value="CA">California</option>
              	<option value="CO">Colorado</option>
              	<option value="CT">Connecticut</option>
              	<option value="DE">Delaware</option>
              	<option value="DC">District Of Columbia</option>
              	<option value="FL">Florida</option>
              	<option value="GA">Georgia</option>
              	<option value="HI">Hawaii</option>
              	<option value="ID">Idaho</option>
              	<option value="IL">Illinois</option>
              	<option value="IN">Indiana</option>
              	<option value="IA">Iowa</option>
              	<option value="KS">Kansas</option>
              	<option value="KY">Kentucky</option>
              	<option value="LA">Louisiana</option>
              	<option value="ME">Maine</option>
              	<option value="MD">Maryland</option>
              	<option value="MA">Massachusetts</option>
              	<option value="MI">Michigan</option>
              	<option value="MN">Minnesota</option>
              	<option value="MS">Mississippi</option>
              	<option value="MO">Missouri</option>
              	<option value="MT">Montana</option>
              	<option value="NE">Nebraska</option>
              	<option value="NV">Nevada</option>
              	<option value="NH">New Hampshire</option>
              	<option value="NJ">New Jersey</option>
              	<option value="NM">New Mexico</option>
              	<option value="NY">New York</option>
              	<option value="NC">North Carolina</option>
              	<option value="ND">North Dakota</option>
              	<option value="OH">Ohio</option>
              	<option value="OK">Oklahoma</option>
              	<option value="OR">Oregon</option>
              	<option value="PA">Pennsylvania</option>
              	<option value="RI">Rhode Island</option>
              	<option value="SC">South Carolina</option>
              	<option value="SD">South Dakota</option>
              	<option value="TN">Tennessee</option>
              	<option value="TX">Texas</option>
              	<option value="UT">Utah</option>
              	<option value="VT">Vermont</option>
              	<option value="VA">Virginia</option>
              	<option value="WA">Washington</option>
              	<option value="WV">West Virginia</option>
              	<option value="WI">Wisconsin</option>
              	<option value="WY">Wyoming</option>
              </select>
            </div>

            <input type="text" class="hnn__fancy__content__body__inputs__medium" v-model="billing.zip" placeholder="Zip" maxlength="5" v-on:keypress="isNumber($event)" required="required">
            <input type="text" class="hnn__fancy__content__body__inputs__full" v-model="billing.phone" placeholder="Phone" required="required">

            <button type="button" name="button" class="btn yellow hnn__fancy__content__body__inputs__full" @click="saveCreditCard">
              <span v-if="!loadingForm">Save</span>
              <span v-else>
                <div class="border-loading-indicator col-3 row-1"></div>
              </span>
            </button>

            <div v-if="stripeError" class="form_error" style="
              padding: 16px;
              margin-top: 16px;
              font-size: 12px;
            ">
              <p>{{stripeError}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hnn__fancy__background"></div>
    </div>

  </section>
</template>


<script>
import {Checkbox, Radio} from 'vue-checkbox-radio';

import Prismic from 'prismic-javascript'
// import Accordion from '~/components/Accordion'
import Purchase from '~/components/Purchase'
import stripeApi from '~/api/stripe'
import { mapGetters } from 'vuex'
import Loading from '~/components/Loading'

export default {
  middleware: 'auth',

  data: function () {
    return {
      accordionActualCard: 0,
      user:{
        name: null,
        email: null,
        cel: null,
        hasCreditCard: false
      },
      creditCard: {
        name: null,
        number: null,
        month: null,
        year: null,
        cvv: null,
      },
      billing:{
        address: null,
        suite: null,
        city: null,
        state: 'AL',
        zip: null,
        phone: null,
      },
      emergency:{
        name: null,
        email: null,
        address: null,
        cel: null
      },
      positions: [],
      sectionActive: 0,
      navigationFixed: false,
      windowVerticalScroll: 0,
      fixedNavigationTopPosition: 0,
      fixedNavigationLeftPosition: 0,

      changingTenant: false,
      changingEmergency: false,

      creditCardFancy: false,
      creditCardType: null,
      loadingForm: false,
      stripeError: null,

      loadingAvatar: false,
    }
  },
  computed: {
    ...mapGetters('auth', ['loggedUser'])
  },
  mounted(){
    this.$root.$emit('headerYellowFix', true);
    this.fixedNavigationTopPosition = this.$refs.fixedNavigation.offsetTop - 90;
    this.fixedNavigationLeftPosition = this.$refs.fixedNavigation.offsetLeft;
    this.calculatePositions();
    window.addEventListener('scroll', this.handleScroll);
    window.scroll();
  },
  beforeDestroy() {
    this.$root.$emit('headerYellowFix', false);
  },
  components: {
    Checkbox,
    Radio,
    Purchase,
    Loading,
  },
  created(){
    this.$store.dispatch('auth/FETCH')
    this.$store.dispatch('stripe/FETCH_SUBSCRIPTIONS')
    this.$store.dispatch('stripe/FETCH_CHARGES')
  },

  methods: {
    snapshotResize(srcData, width, height) {
      return new Promise((resolve, reject) => {
        let imageObj = new Image();
        let canvas  = document.createElement("canvas");
        let ctx = canvas.getContext('2d');
        let xStart = 0;
        let yStart  = 0;
        let aspectRadio;
        let newWidth;
        let newHeight;
        canvas.width = width;
        canvas.height = height;

        imageObj.onload = function() {
          aspectRadio = imageObj.height / imageObj.width;

          if (imageObj.height < imageObj.width) {
             //horizontal
             console.log('horizontal')
             aspectRadio = imageObj.width / imageObj.height;
             newHeight = height,
             newWidth = aspectRadio * height;
             xStart = -(newWidth - width) / 2;
          } else {
             //vertical
             console.log('vertical')
             newWidth = width,
             newHeight = aspectRadio * width;
             yStart = -(newHeight - height) / 2;
          }

          ctx.drawImage(imageObj, xStart, yStart, newWidth, newHeight);

          try {
            resolve(canvas.toDataURL("image/jpeg", 0.75))
          } catch(e) {
            reject(e)
          }
        }

        imageObj.src = srcData;
      })
    },
    readAsDataURL(file) {
      return new Promise((resolve, reject) => {
        if (file) {
          let reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = () => {
            reject(reader.error);
          };
          let interval = setInterval(() => {
            if (file.size > 0) {
              reader.readAsDataURL(file);
              clearInterval(interval);
            }
          }, 500);
        } else {
          reject();
        }
      });
    },
    uploadProfilePic(){
      this.$refs.avatarInput.click();
    },
    changeAvatar() {
      // "file"
      let file = this.$refs.avatarInput.files[0]
      if (file) {
        this.loadingAvatar = true;
        this.readAsDataURL(file).then((fileUrl) => {
          this.snapshotResize(fileUrl, 360, 410).then((base64) => {
            this.avatar = base64
            this.$store.dispatch('auth/UPDATE_PROFILE', {
              avatar: base64
            }).then((response)=>{
              console.log(response);
              this.loadingAvatar = false;
            })
          })
        })
      }
    },
    logout() {
      this.$router.push('/')
      this.$store.dispatch('auth/reset')
    },
    saveCreditCard(){
      if(this.creditCard.name && this.creditCard.number && this.creditCard.month && this.creditCard.year && this.creditCard.cvv){
        if(this.billing.address && this.billing.suite  && this.billing.city && this.billing.state && this.billing.zip && this.billing.phone){
          this.stripeError = null;
          this.loadingForm = true;

          stripeApi.customer.create({
            card: this.creditCard,
            billing: this.billing
          }).then(({ data: customer }) => {
            this.loadingForm = false
            this.creditCardFancy = false;
            this.onPurchase(customer)
            console.error('Purchase#saved!')
          }, ({response: { data: { errors }}}) => {
            this.loadingForm = false
            this.stripeError = errors && errors[0] && errors[0].detail || "Sorry, can't add a card!"
          })
        }
      }
    },
    openDialog(value){
      console.log(value);
      // NEW ONE OR EDIT CREDIT CARD
      this.creditCardFancy = !this.creditCardFancy;
    },
    changeCard(value){
      this.accordionActualCard = value;
    },
    onPurchase(customer){
      this.$store.dispatch('auth/UPDATE', { stripe: { customer } })
      this.$store.dispatch('stripe/FETCH_SUBSCRIPTIONS')
      this.$store.dispatch('stripe/FETCH_CHARGES')
    },
    changeTent(){
      if(this.changingTenant){
        let { email, name, cel } = this.user

        this.$store.dispatch('auth/UPDATE_PROFILE', {
          first_name: name.split(/\s+/)[0],
          last_name: name.split(/\s+/)[1],
          email: email,
          phone: cel
        })
      }

      this.user.name = [this.loggedUser.first_name, this.loggedUser.last_name].join(' ')
      this.user.email = this.loggedUser.email
      this.user.cel = this.loggedUser.phone

      this.changingTenant = !this.changingTenant;
    },
    changeEmergency(){
      if(this.changingEmergency){
        this.$store.dispatch('auth/UPDATE_PROFILE', {
          payload: {
            emergency: this.emergency
          }
        })
      }

      this.emergency = Object.assign({}, this.loggedUser.payload.emergency || {})
      this.changingEmergency = !this.changingEmergency;
    },
    calculatePositions(){
      this.positions = [];
      let elements = document.getElementsByClassName('hnn__faq_module__right_content__element');
      let i;
      for (i = 0; i < elements.length; i++) {
        this.positions.push(elements[i].offsetTop - 60 - 30);
      }
    },
    closest (num, arr) {
        let curr = 0;
        let diff = Math.abs (num - curr);
        for (let val = 0; val < arr.length; val++) {
            let newdiff = Math.abs (num - arr[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = val;
            }
        }
        return curr;
    },
    handleScroll (event) {
      this.windowVerticalScroll = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
      (this.windowVerticalScroll >= this.fixedNavigationTopPosition ) ? this.navigationFixed = true : this.navigationFixed = false;
      this.sectionActive = this.closest (this.windowVerticalScroll, this.positions);
    },
    goTo(id){
      const position = document.getElementById(id).offsetTop - 90;
      if( (position + 30 < window.pageYOffset) || (position - 30 > window.pageYOffset)){
        window.scroll({
          top: position,
          left: 0,
          behavior: 'smooth'
        });
      }
    },

    getCardType(number){
      if(number){
        // visa
        var re = new RegExp("^4");
        if (number.match(re) != null){
          this.creditCardType = 'Visa';
        }

        // Mastercard
         if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) {
           this.creditCardType = 'Mastercard';
         }
        // AMEX
        re = new RegExp("^3[47]");
        if (number.match(re) != null){
          this.creditCardType = 'AMEX';
        }
        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(re) != null){
          this.creditCardType = 'Discover';
        }
      }else{
        this.creditCardType = null;
      }
      console.log( this.creditCardType );
    },

    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    validateTentForm(){},
    validateTentEmergency(){}
  }
  ,
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

</script>

<style>
.ab-file-input-wrapper {
  position: relative;
  overflow: hidden;
}
.ab-file-input-wrapper img {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.ab-file-input-wrapper input {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
}
</style>
