<template>
  <v-container
    id="whatwedo"
    tag="section"
  >
    <base-subheading class="mt-15">
      What We Do
    </base-subheading>

    <p class="text-center">
      We are 100% Online Accountants and Business Advisers.
    </p>
    <p class="text-center">
      We take care of your accounting books remotely, so you can do what you do best.
    </p>
    <v-row class="mb-6 flexible">
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-file-alt"
                  />
                  <h2 class="mt-4">
                    BOOKKEEPING
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Real time bookkeeping to ensure you get the information you need when you need it.
                All bookkeeping is completed using a paperless and virtual approach. We provide on demand bookkeeping services
                to meet your business and/or personal needs. Monthly, Quarterly, Annual Bookkeeping.
                <div class="text-right">
                  <country-flag
                    country="ca"
                    size="normal"
                  />

                  <country-flag
                    country="jm"
                    size="normal"
                  />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-calendar-alt"
                  />
                  <h2 class="mt-4">
                    YEAR END FINANCIAL STATEMENTS
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Financial statements are prepared on a Notice to Reader basis.
                With our bookkeeping packages, we also provide internal statements
                for use at regular intervals with opportunities to review with a CPA
                (depending on the service level chosen).
                <div class="text-right">
                  <country-flag
                    country="ca"
                    size="normal"
                  />

                  <country-flag
                    country="jm"
                    size="normal"
                  />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-university"
                  />
                  <h2 class="mt-4">
                    TAX ADVICE AND COMPLIANCE
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                We file personal and corporate tax returns for small business owners.
                We monitor your tax situation and provide proactive advice and tax planning.
                If an issue of a highly technical nature arises, we have experts we can call upon.
                <div class="text-right">
                  <country-flag
                    country="ca"
                    size="normal"
                  />

                  <country-flag
                    country="jm"
                    size="normal"
                  />
                  <country-flag
                    country="us"
                    size="normal"
                  /><a style="color:red">*</a>
                  <div
                    class="text-sm-rght"
                    style="color:red "
                  >
                    <i> Only personal return for US.</i>
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
    <!----Second row--->
    <v-row class="mb-6">
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-building"
                  />
                  <h2 class="mt-4">
                    SALES TAX / PAYROLL
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  We can file sales tax returns as required to ensure you
                  are onside with your reporting requirements.
                </div><div class="mt-1">
                  Our Team have specialized training needed to manage your payroll,
                  large or small, efficiently and accurately. Our team will get your payroll
                  out on time, and ensure that your business is complying with all payroll
                  tax obligations.
                  <div class="text-right">
                    <country-flag
                      country="ca"
                      size="normal"
                    />

                    <country-flag
                      country="jm"
                      size="normal"
                    />
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-hands-helping"
                  />
                  <h2 class="mt-4">
                    BUSINESS COACHING
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                We provide independent business coaching services.
                As a business coach, we use proven techniques for
                increasing your chance for success.  These include a focus on
                profit and growth strategies and the integration with all key
                elements of your business for a focused plan you can build on.
                All industries are served.
                <div class="text-right">
                  <country-flag
                    country="ca"
                    size="normal"
                  />

                  <country-flag
                    country="jm"
                    size="normal"
                  />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-user-tie"
                  />
                  <h2 class="mt-4">
                    VIRTUAL CFO SERVICES
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                As your Chief Financial Officer, we handle everything to do with your financials.
                The “Virtual” part means we don’t have to be employed by you or work in your office
                to do that.There are so many ways we help small and medium business grow and we
                look forward to helping you too. Let us help you start and scale the right way;
                Cashflow planning, Budgeting, Variance Analysis and Board reports.
                <div class="text-right">
                  <country-flag
                    country="ca"
                    size="normal"
                  />

                  <country-flag
                    country="jm"
                    size="normal"
                  />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
    <!-----third row---->
    <v-row class="mb-6">
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-desktop"
                  />
                  <h2 class="mt-4">
                    <!--BUSINESS INCORPORATION & SECRETERIAL SERVICES-->
                    SOFTWARE INTEGRATION
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                We will provide consulting on technology integration.
                We are not an expert at all the softwares, but we will do
                our best to help you find what you need. Even if it is another expert!
                <div class="text-right">
                  <country-flag
                    country="ca"
                    size="normal"
                  />

                  <country-flag
                    country="jm"
                    size="normal"
                  />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-home"
                  />
                  <h2 class="mt-4">
                    PROPERTY MANAGEMENT
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Let us manage your rentals properties. Rental Contract, Invoicing Maintenance,
                rent collection, finances, tenant placement and inspections - we handle it all.
                No More Missed Payments. We also provide monthly Reporting.
                <div class="text-right">
                  <country-flag
                    country="jm"
                    size="normal"
                  />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col class="text-center">
        <v-card
          elevation="2"
          outlined
          shaped
        >
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item,i) in 1"
              :key="i"
            >
              <v-expansion-panel-header>
                <div
                  class="text-center"
                >
                  <v-icon
                    x-large
                    class="fas fa-question-circle"
                  />
                  <h2 class="mt-4">
                    OTHER SERVICES
                  </h2>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Other service that we provide but not limited to are: <div>Business registration and secretarial servics,</div>
                <div> Cash flow analysis and budgeting,</div> <div>
                  the monitoring of Key Performance
                  Indicator’s (KPI) and etc.
                </div>
                These services can be monthly or quarterly.
                <div class="text-right">
                  <country-flag
                    country="ca"
                    size="normal"
                  />

                  <country-flag
                    country="jm"
                    size="normal"
                  />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'WHatWeDo',
    data: () => ({

    }),
  }
</script>
<style>
.v-expansion-panel {
  min-height: 145px;
  }
</style>
