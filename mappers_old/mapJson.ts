import { getCarouselData } from "./getCarouselData";
import { getCheckDeliveryDate } from "./getCheckDeliveryDate";
import { getClinicalProof } from "./getClinicalProof";
import { getClinicalResult } from "./getClinicalResult";
import { getDoctorConsultation } from "./getDoctorConsultation";
import { getFaqAccordion } from "./getFaqAccordion";
import { getFaqData } from "./getFaqData";
import { getFrequentlyPurchased } from "./getFrequentlyPurchased";
import { getHowDoesItDoItCardData } from "./getHowDoesItDoItCardData";
import { getHowItsUsed } from "./getHowItsUsed";
import { getHowWeCompare } from "./getHowWeCompare";
import { getImageGallery } from "./getImageGallery";
import { getIngredientList } from "./getIngredientList";
import { getProduct } from "./getProduct";
import { getProductDescription } from "./getProductDescription";
import { getProductDetails } from "./getProductDetails";
import { getProductSummary } from "./getProductSummary";
import { getProductSwitchWidget } from "./getProductSwitchWidget";
import { getQuestionAndAnswer } from "./getQuestionAndAnswer";
import { getRatingsAndReview } from "./getRatingsAndReview";
import { getSafeAndEffective } from "./getSafeAndEffective";
import { getWhatDoesProductDo } from "./getWhatDoesProductDo";
import { getWhatItWorksWithBest } from "./getWhatItWorksWithBest";
import { getWhatWeWontData } from "./getWhatWeWontData";
import { getWhoIsItForData } from "./getWhoIsItForData";

export const mapJson = (json: any): any => {
  const res = {
    pageData: [
      getImageGallery(),
      getProductDescription(json),
      getProductSwitchWidget(json),
      getProductSummary(json),
      getProductDetails(json),
      getCheckDeliveryDate(),
      getWhatDoesProductDo(json),
      getWhoIsItForData(json),
      getHowDoesItDoItCardData(json),
      getClinicalResult(json),
      getDoctorConsultation(json),
      getWhatItWorksWithBest(json),
      getHowItsUsed(json),
      getSafeAndEffective(json),
      getWhatWeWontData(json),
      getHowWeCompare(json),
      getClinicalProof(json),
      getFrequentlyPurchased(json),
      getIngredientList(json),
      getRatingsAndReview(),
      getQuestionAndAnswer(),
      getFaqAccordion(),
    ],
    ...getCarouselData(json),
    ...getFaqData(json),
    product: getProduct(json),
  };
  return res;
};
