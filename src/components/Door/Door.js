import React from "react";
import { LanguageContext } from "../../context";
import {
  Dimension,
  ComponentLabel,
  Radio,
  Input,
  Button
} from "../../components";
import photoRoom from "../../../public/assets/room.png";
import photoOutside from "../../../public/assets/outside.png";

const renderDoorLeaf = (doorConfig, colorValue) => {
  const { leafs, width, height, beams, posts } = doorConfig;

  return (
    <>
      {Array.from({ length: leafs }, (_, index) => (
        <div
          key={index}
          className="leaf"
          style={{
            width: 1.28 * parseInt(width, 10),
            height: 1.28 * parseInt(height, 10)
          }}
        >
          <Dimension value={width} />
          {renderDoorDivision(beams, "beams", "beam", colorValue)}
          {renderDoorDivision(posts, "posts", "post", colorValue)}
        </div>
      ))}
    </>
  );
};

const renderDoorDivision = (length, parentClass, childClass, colorValue) => (
  <div className={parentClass}>
    {Array.from({ length }, (_, index) => (
      <div
        key={index}
        className={childClass}
        style={{ background: colorValue }}
      />
    ))}
  </div>
);

const renderImage = (photo, isWrapper) => {
  if (isWrapper)
    return (
      <span className="image-wrapper">
        <img src={photo} alt="3 viewd" />
      </span>
    );
  return <img src={photo} alt="3 viewd" />;
};

const renderToggle3D = (is3D, handleToggle3D) => (
  <div className="buttons-3D">
    <Button
      isWhite={is3D}
      type="secondSmall"
      color="#6F91AA"
      label="3D"
      onClick={handleToggle3D}
    />
    <Button
      isWhite={!is3D}
      type="secondSmall"
      color="#6F91AA"
      label="2D"
      onClick={handleToggle3D}
    />
  </div>
);

const renderType = (type, checked, handleChange) => (
  <ComponentLabel label={type.title}>
    <Radio
      name="doorType"
      list={[
        {
          id: 1,
          label: type.values[0]
        },
        {
          id: 2,
          label: type.values[1]
        }
      ]}
      checked={checked}
      path="leafs"
      onChange={handleChange}
    />
  </ComponentLabel>
);

const renderSize = (size, width, height, handleChange) => (
  <ComponentLabel label={size.title}>
    <Input
      isSmall
      label={size.width}
      value={width}
      secondLabel="cm"
      path="width"
      onChange={handleChange}
    />
    <Input
      isSmall
      label={size.height}
      value={height}
      secondLabel="cm"
      path="height"
      onChange={handleChange}
    />
  </ComponentLabel>
);

const renderDivision = (division, beams, posts, handleChange) => (
  <ComponentLabel label={division.title}>
    <Input
      isSmall
      isCount
      label={division.beams}
      labelWidth={122}
      value={beams - 2}
      path="beams"
      onChange={handleChange}
    />
    <Input
      isSmall
      isCount
      label={division.posts}
      labelWidth={122}
      value={posts - 2}
      path="posts"
      onChange={handleChange}
    />
  </ComponentLabel>
);

const renderColor = (color, checked, handleChange) => {
  const list = Array.from({ length: color.values.length }, (_, index) => ({
    id: index,
    label: color.values[index].label,
    color: color.values[index].value
  }));

  return (
    <ComponentLabel label={color.title}>
      <Radio
        name="doorType"
        isInline
        list={list}
        checked={checked}
        path="colorId"
        onChange={handleChange}
      />
    </ComponentLabel>
  );
};

const renderNavigation = (
  navigation,
  steps,
  currentStep,
  handleSetCurrentStep
) => {
  const isNotFirstStep = currentStep !== 1;
  const isNotLastStep = currentStep !== steps.length;

  return (
    <div className="navigation">
      {isNotFirstStep && (
        <Button
          isWhite
          type="second"
          color="#6F91AA"
          label={navigation[0].label}
          value={navigation[0].value}
          onClick={handleSetCurrentStep}
        />
      )}
      {isNotLastStep && (
        <Button
          type="second"
          color="#6F91AA"
          label={navigation[1].label}
          value={navigation[1].value}
          onClick={handleSetCurrentStep}
        />
      )}
    </div>
  );
};

const Door = ({
  currentStep,
  doorConfig,
  handleChange,
  handleToggle3D,
  handleSetCurrentStep
}) => {
  const { leafs, width, height, beams, posts, colorId, is3D } = doorConfig;
  return (
    <LanguageContext.Consumer>
      {({
        content: {
          params: { type, size, division, color, navigation },
          steps
        }
      }) => (
        <div className="door">
          <div className={`view-wrapper ${is3D ? "is3D" : ""}`}>
            {renderImage(photoRoom)}
            {renderToggle3D(is3D, handleToggle3D)}
            <div className="view">
              {renderImage(photoOutside, true)}

              {leafs > 1 && <Dimension value={width * leafs} isTop />}
              <Dimension value={height} isHeight />
              {renderDoorLeaf(doorConfig, color.values[colorId].value)}
            </div>
          </div>
          <div className="params">
            {currentStep === 1 && (
              <>
                {renderType(type, leafs, handleChange)}
                {renderSize(size, width, height, handleChange)}
              </>
            )}
            {currentStep === 2 && (
              <>{renderDivision(division, beams, posts, handleChange)}</>
            )}
            {currentStep === 3 && (
              <>{renderColor(color, colorId, handleChange)}</>
            )}
            {renderNavigation(
              navigation,
              steps,
              currentStep,
              handleSetCurrentStep
            )}
          </div>
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default Door;
